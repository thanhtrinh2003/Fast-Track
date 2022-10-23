export function crowdLevel(score) {
    if (score < 4) {
        return ("Low");
    } else if (score > 4 && score < 7) {
        return ("Moderate");
    } else {
        return ("High");
    }
}