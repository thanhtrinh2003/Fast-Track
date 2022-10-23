export function FindColor(score) {
    if (score < 4) {
        return ("green");
    } else if (score > 4 && score < 7) {
        return ("orange");
    } else {
        return ("red");
    }
}

export function GenDescription(score) {
    return(out = "Crowded Level: " + score);
}