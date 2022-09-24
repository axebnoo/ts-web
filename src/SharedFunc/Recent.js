export const setRecent = (p_key, p_value) => {
    if (p_key && p_value) {
        let tExistsItem = [];
        let eIndex = -1;

        if (localStorage.getItem(p_key + "_recent")) {
            tExistsItem = JSON.parse(localStorage.getItem(p_key + "_recent"));
        }

        eIndex = tExistsItem.indexOf(p_value);

        if (eIndex >= 0) {
            tExistsItem.splice(eIndex, 1);
        }

        tExistsItem.unshift(p_value);

        if (tExistsItem?.length > 5) {
            tExistsItem = tExistsItem.slice(0, 5);
        }

        localStorage.setItem(p_key + "_recent", JSON.stringify(tExistsItem));
    }
}

export const getRecent = (p_key) => {
    let tExistsItem = [];

    if (localStorage.getItem(p_key + "_recent")) {
        tExistsItem = JSON.parse(localStorage.getItem(p_key + "_recent"));
    }

    return tExistsItem;
}