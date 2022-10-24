export function linkOration(string) {
    let final = ''
    string.trim().toLowerCase().split(' ').forEach(word => final = final + word)
    return final
}