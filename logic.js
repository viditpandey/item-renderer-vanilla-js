const itemClassName = 'col-xs-12 col-sm-6 col-md-3 col-lg-2';
const colorsByItemType = {
    fruit: 'orange',
    vegetable: 'green',
    meat: 'red'
}
function load () {

    var myData = JSON.parse(data);
    var final = "";

    myData.forEach(item => {
        var itemDisplay = itemsRenderer(item);
        final+=itemDisplay;
    });

    document.getElementById("items").innerHTML = `<div class="row">${final}</div>`;
}

function itemsRenderer (item) {
    return (
        `<div class="${itemClassName} ${item.type} box">
            <div class="box-item">
                <div class="box-item-img"></div>
                <div class="box-item-header">
                    <div class="col-xs-12 col-sm-7 box-item-title">
                        ${item.title}
                    </div>
                    <div class="col-xs-12 col-sm-4 box-item-type">
                        ${item.type}
                    </div>
                    <div class="hidden-xs col-sm-1">
                    </div>
                    <br/>
                </div>
                <div class="box-item-content row">
                    <div class="col-xs-12 box-item-description">
                        ${item.description}
                    </div>
                </div>
            </div>
        </div>`
    )
}

function filter(filterType) {
    const filterItem = document.getElementById(filterType);
    const isChecked = filterItem.checked;
    const filterItems = document.getElementsByClassName("box");
    const itemsToManipulate = [];

    for (let i = 0; i < filterItems.length; i++) {
        const element = filterItems[i];
        if (element.className.split(" ").indexOf(filterType) > -1) {
            itemsToManipulate.push(element)
        }
    }

    for (let i = 0; i < itemsToManipulate.length; i++) {
        const element = itemsToManipulate[i];
        if (isChecked) {
            // remove hide class to items with class name as filterType
            element.className = element.className.replace("hide", " ");
        } else {
            // add hide class to items with class name as filterType
            element.className+= " hide ";
        }
    }
}