export function getRemoveClass(currentClassName, className) {
    return currentClassName.replace(new RegExp('(?:^|\\s)' + className + '(?!\\S)'), '');
}
export function getAddClass(currentClassName, className) {
    return currentClassName + (currentClassName !== '' ? ' ' : '') + className;
}
