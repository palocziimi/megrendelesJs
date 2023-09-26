const cserek = [];

document.querySelectorAll("tr").forEach((item, index) => {
    if(index != 0 && index != 5) {
        item.addEventListener("click", () => {
            if (cserek.length >= 2) {
                while(cserek.length > 0) {
                    cserek.pop();
                }
            }
            cserek.push(item);
            if (cserek.length == 2) {
                let tmp = cserek[0].innerHTML;
                cserek[0].innerHTML = cserek[1].innerHTML;
                cserek[1].innerHTML = tmp;
            }
        });

    }
});