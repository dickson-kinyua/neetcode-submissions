class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
    simplifyPath(path) {
        const parts = path.split("/");
        let stack = [];
        for (const part of parts) {
            if (part === "" || part === ".") {
                continue;
            }
            if (part === "..") {
                if (stack.length > 0) {
                    stack.pop();
                }
            } else {
                stack.push(part);
            }
        }
        return "/" + stack.join("/");
    }
}
