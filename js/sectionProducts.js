const lang = select.value;

for (let i of products) {
    const bigBox = document.getElementById("rowContiner");
    let box = document.createElement("div");
    box.classList.add("col-sm-6");

    let single = document.createElement('div');
    single.classList.add('single-special-menu', 'animated', 'fadeInDown', 'wow');
    single.setAttribute('data-wow-delay', ".1s");
    box.appendChild(single);

    let hrefOne = document.createElement('a');
    hrefOne.setAttribute('href', "#");
    hrefOne.setAttribute('data-toggle', "modal");
    hrefOne.setAttribute('data-target', i.target);
    single.appendChild(hrefOne);

    let sp = document.createElement('div');
    sp.className = "sp-menu-thumb";
    hrefOne.appendChild(sp);

    let pull = document.createElement('img')
    pull.classList.add('pull-left');
    pull.setAttribute('src', i.image);
    pull.setAttribute("alt", "picture");
    pull.setAttribute("width", "125px");
    pull.setAttribute("height", "auto");
    sp.appendChild(pull);

    let boxContent = document.createElement('div');
    boxContent.classList.add('sp-menu-content');
    hrefOne.appendChild(boxContent);

    let spName = document.createElement('div');
    spName.className = 'sp-menu-name-price';
    boxContent.appendChild(spName);

    let spNameH = document.createElement('h3');
    spNameH.textContent = i.name;

    let spNameSpan = document.createElement('span');
    spNameSpan.className = "color-primary";
    spNameSpan.textContent = "$" + i.price;
    spName.append(spNameH, spNameSpan)

    let boxDiskr = document.createElement('p');
    boxDiskr.textContent = langArr[i.discr][lang];

    let spanBox = document.createElement('span')
    spanBox.textContent = langArr[i.btn][lang];
    boxDiskr.append(spanBox);

    let spanIng = document.createElement('i');
    spanIng.className = "fa fa-eye";
    spanIng.setAttribute("aria-hidden", "true");
    spanBox.append(spanIng);

    boxContent.appendChild(boxDiskr);
    bigBox.append(box)
}




