export default function(str) {
    if (!str) {
        return false;
    }

    return str.replace(/\s*$/, "");
}
