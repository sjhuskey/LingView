// media_utils.js
export function getMediaFilePath(mediaFilename) {
    return /^(\w)+:\/\//i.test(mediaFilename)
        ? mediaFilename
        : `data/media_files/${mediaFilename}`;
}