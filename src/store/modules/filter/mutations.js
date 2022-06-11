import MUTATIONS from "@/store/modules/filter/mutation-types";
import searchWordsInString from "@/helpers/searchWordsInString";
import removeLastSpacesInString from "@/helpers/removeLastSpacesInString";

export default {
    [MUTATIONS.FILTER_ASSIGNMENTS](state, filterData) {
        const {
            searchField,
            oldAssignmentsFirst,
            match,
            searchByTitles,
            searchByDescriptions,
            negativeSearch,
            sensitiveCase,
        } = filterData.filterOptions;

        let basicAssignments = [...filterData.assignments];

        // Sort by date

        if (oldAssignmentsFirst) {
            basicAssignments.sort(
                (firstItem, secondItem) =>
                    firstItem.created - secondItem.created
            );
        }

        // Break if search field is empty

        if (!searchField) {
            state.filteredAssignments = basicAssignments;
            return;
        }

        // Variant 1 +

        if (negativeSearch && sensitiveCase && match) {
            basicAssignments = basicAssignments.filter((item) => {
                const searchText = searchField;
                const title = item.title;
                const text = item.text;

                // Search by title and description
                if (
                    (searchByTitles && searchByDescriptions) ||
                    (!searchByTitles && !searchByDescriptions)
                ) {
                    return (
                        !title.includes(searchText) &&
                        !text.includes(searchText)
                    );
                }

                // Search by title only
                if (searchByTitles) {
                    return !title.includes(searchText);
                }

                // Search by description only
                if (searchByDescriptions) {
                    return !text.includes(searchText);
                }
            });
        }

        // Variant 2 +

        if (!negativeSearch && sensitiveCase && match) {
            basicAssignments = basicAssignments.filter((item) => {
                const searchText = searchField;
                const title = item.title;
                const text = item.text;

                // Search by title and description
                if (
                    (searchByTitles && searchByDescriptions) ||
                    (!searchByTitles && !searchByDescriptions)
                ) {
                    return (
                        title.includes(searchText) || text.includes(searchText)
                    );
                }

                // Search by title only
                if (searchByTitles) {
                    return title.includes(searchText);
                }

                // Search by description only
                if (searchByDescriptions) {
                    return text.includes(searchText);
                }
            });
        }

        // Variant 3 +

        if (negativeSearch && !sensitiveCase && match) {
            basicAssignments = basicAssignments.filter((item) => {
                const searchText = searchField.toLowerCase();
                const title = item.title.toLowerCase();
                const text = item.text.toLowerCase();

                // Search by title and description
                if (
                    (searchByTitles && searchByDescriptions) ||
                    (!searchByTitles && !searchByDescriptions)
                ) {
                    return (
                        !title.includes(searchText) &&
                        !text.includes(searchText)
                    );
                }

                // Search by title only
                if (searchByTitles) {
                    return !title.includes(searchText);
                }

                // Search by description only
                if (searchByDescriptions) {
                    return !text.includes(searchText);
                }
            });
        }

        // Variant 4 +

        if (negativeSearch && sensitiveCase && !match) {
            basicAssignments = basicAssignments.filter((item) => {
                const searchTextArr = removeLastSpacesInString(
                    searchField
                ).split(" ");

                const title = item.title;
                const text = item.text;

                // Search by title and description
                if (
                    (searchByTitles && searchByDescriptions) ||
                    (!searchByTitles && !searchByDescriptions)
                ) {
                    return (
                        !searchWordsInString(searchTextArr, title) &&
                        !searchWordsInString(searchTextArr, text)
                    );
                }

                // Search by title only
                if (searchByTitles) {
                    return !searchWordsInString(searchTextArr, title);
                }

                // Search by description only
                if (searchByDescriptions) {
                    return !searchWordsInString(searchTextArr, text);
                }
            });
        }

        // Variant 5 +

        if (!negativeSearch && !sensitiveCase && match) {
            basicAssignments = basicAssignments.filter((item) => {
                const searchText = searchField.toLowerCase();
                const title = item.title.toLowerCase();
                const text = item.text.toLowerCase();

                // Search by title and description
                if (
                    (searchByTitles && searchByDescriptions) ||
                    (!searchByTitles && !searchByDescriptions)
                ) {
                    return (
                        title.includes(searchText) || text.includes(searchText)
                    );
                }

                // Search by title only
                if (searchByTitles) {
                    return title.includes(searchText);
                }

                // Search by description only
                if (searchByDescriptions) {
                    return text.includes(searchText);
                }
            });
        }

        // Variant 6 +

        if (negativeSearch && !sensitiveCase && !match) {
            basicAssignments = basicAssignments.filter((item) => {
                const searchTextArr = removeLastSpacesInString(
                    searchField.toLowerCase()
                ).split(" ");

                const title = item.title.toLowerCase();
                const text = item.text.toLowerCase();

                // Search by title and description
                if (
                    (searchByTitles && searchByDescriptions) ||
                    (!searchByTitles && !searchByDescriptions)
                ) {
                    return (
                        !searchWordsInString(searchTextArr, title) &&
                        !searchWordsInString(searchTextArr, text)
                    );
                }

                // Search by title only
                if (searchByTitles) {
                    return !searchWordsInString(searchTextArr, title);
                }

                // Search by description only
                if (searchByDescriptions) {
                    return !searchWordsInString(searchTextArr, text);
                }
            });
        }

        // Variant 7 +

        if (!negativeSearch && sensitiveCase && !match) {
            basicAssignments = basicAssignments.filter((item) => {
                const searchTextArr = removeLastSpacesInString(
                    searchField
                ).split(" ");

                const title = item.title;
                const text = item.text;

                // Search by title and description
                if (
                    (searchByTitles && searchByDescriptions) ||
                    (!searchByTitles && !searchByDescriptions)
                ) {
                    return (
                        searchWordsInString(searchTextArr, title) ||
                        searchWordsInString(searchTextArr, text)
                    );
                }

                // Search by title only
                if (searchByTitles) {
                    return searchWordsInString(searchTextArr, title);
                }

                // Search by description only
                if (searchByDescriptions) {
                    return searchWordsInString(searchTextArr, text);
                }
            });
        }

        // Variant 8 +

        if (!negativeSearch && !sensitiveCase && !match) {
            basicAssignments = basicAssignments.filter((item) => {
                const searchTextArr = removeLastSpacesInString(
                    searchField.toLowerCase()
                ).split(" ");

                const title = item.title.toLowerCase();
                const text = item.text.toLowerCase();

                // Search by title and description
                if (
                    (searchByTitles && searchByDescriptions) ||
                    (!searchByTitles && !searchByDescriptions)
                ) {
                    return (
                        searchWordsInString(searchTextArr, title) ||
                        searchWordsInString(searchTextArr, text)
                    );
                }

                // Search by title only
                if (searchByTitles) {
                    return searchWordsInString(searchTextArr, title);
                }

                // Search by description only
                if (searchByDescriptions) {
                    return searchWordsInString(searchTextArr, text);
                }
            });
        }

        state.filteredAssignments = basicAssignments;
    },
    [MUTATIONS.REMOVE_FILTERED_ASSIGNMENT](state, id) {
        state.filteredAssignments = state.filteredAssignments.filter(
            (assignment) => assignment.id !== id
        );
    },
};
