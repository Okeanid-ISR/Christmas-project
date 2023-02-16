const firstPage = document.querySelector('#shop-right-1')
const secondPage = document.querySelector("#shop-right-2")
const secondBtn = document.querySelector('#shop-trees-2')
const firstBtn = document.querySelector('#shop-trees-1')
const thirdBtn = document.querySelector('#shop-trees-3')
const fourthBtn = document.querySelector('#shop-trees-4')
const decorations = document.querySelector("#decorations")
const decorationsPage = document.querySelector("#shop-right-decorations")
const trees = document.querySelector("#trees")
////gifts
const giftPageOne = document.querySelector('#shop-right-gifts')
const gifts = document.querySelector('#gifts')

///////clothes
const clothesPage = document.querySelector('#shop-right-clothes')
const clothes = document.querySelector('#clothes')

secondBtn.onclick = function () {
    firstPage.style.display = "none"
    giftPageOne.style.display = "none"

    secondPage.style.display = "block"
}

firstBtn.onclick = function () {
    firstPage.style.display = "block"
    secondPage.style.display = "none"
    giftPageOne.style.display = "none"
    clothesPage.style.display = "none"


}

thirdBtn.onclick = function () {
    clothesPage.style.display = "none"

    firstPage.style.display = "block"
    secondPage.style.display = "none"
    giftPageOne.style.display = "none"

}
fourthBtn.onclick = function () {
    clothesPage.style.display = "none"
    firstPage.style.display = "none"
    secondPage.style.display = "block"
    giftPageOne.style.display = "none"
}

decorations.onclick = function () {
    firstPage.style.display = "none"
    secondPage.style.display = "none"
    clothesPage.style.display = "none"
    decorationsPage.style.display = "block"
    giftPageOne.style.display = "none"

}

trees.onclick = function () {
    decorationsPage.style.display = "none"
    firstPage.style.display = "block"
    giftPageOne.style.display = "none"
    secondPage.style.display = "none"
    clothesPage.style.display = "none"
}


gifts.onclick = function () {
    secondPage.style.display = "none"
    firstPage.style.display = "none"
    clothesPage.style.display = "none"
    decorationsPage.style.display = "none"
    giftPageOne.style.display = "block"
}

clothes.onclick = function () {
    secondPage.style.display = "none"
    firstPage.style.display = "none"
    decorationsPage.style.display = "none"
    giftPageOne.style.display = "none"
    clothesPage.style.display = "block"
}
////////////
const filtersMain = document.querySelector("#filters-color-main")
const disappear = document.querySelector("#disappear")
const colors = document.querySelector("#colorsBtn")
const treeText = document.querySelector("#filters-tree-main")
const colorBtn = document.querySelector("#filter-color")
const blueColor = document.querySelector("#blue")
const greenColor = document.querySelector("#green")
const redColor = document.querySelector("#red")
colorBtn.addEventListener('click', function () {

    if (colors.style.display === 'none') {
        colors.style.display = 'block';
        treesChoice.style.display = "none"
        costBlock.style.display = 'none'
        koreanBrandBlock.style.display = 'none'
    } else {
        colors.style.display = 'none';
    }
})

blueColor.addEventListener('click', function () {
    disappear.style.display = "none"
    filtersMain.style.display = "flex"
    filtersMain.innerHTML = "Color: skyblue"
})
greenColor.addEventListener('click', function () {
    disappear.style.display = "none"
    filtersMain.style.display = "flex"
    filtersMain.innerHTML = "Color: green"
})
redColor.addEventListener('click', function () {
    disappear.style.display = "none"
    filtersMain.style.display = "flex"
    filtersMain.innerHTML = "Color: snow"
})


const treesChoice = document.querySelector("#treesBtn")
const treeBtn = document.querySelector("#filter-tree")
const artificialTree = document.querySelector("#artificial")
const naturalTree = document.querySelector("#naturalTree")
treeBtn.addEventListener('click', function () {
    if (treesChoice.style.display === 'none') {
        treesChoice.style.display = 'block';
        colors.style.display = "none"
        costBlock.style.display = 'none'
        koreanBrandBlock.style.display = 'none'
    } else {
        treesChoice.style.display = 'none';
    }
})
artificialTree.addEventListener('click', function () {
    disappear.style.display = "none"
    treeText.style.display = "flex"
    treeText.innerHTML = "Tree: artificial"
})

naturalTree.addEventListener('click', function () {
    disappear.style.display = "none"
    treeText.style.display = "flex"
    treeText.innerHTML = "Tree: natural"
})


const brandBtn = document.querySelector("#filter-brand")
const textBrandToChange = document.querySelector("#filters-brand-main")
const koreanBrandBlock = document.querySelector("#filter-brand-block")
const koreanBrand = document.querySelector("#korean")

brandBtn.addEventListener('click', function () {
    if (koreanBrandBlock.style.display === 'none') {
        koreanBrandBlock.style.display = 'flex'
        colors.style.display = "none"
        treesChoice.style.display = 'none';
        costBlock.style.display = 'none'
    } else {
        koreanBrandBlock.style.display = 'none'
    }
})
koreanBrand.addEventListener('click', function () {
    disappear.style.display = "none"
    textBrandToChange.style.display = "flex"
    textBrandToChange.innerHTML = 'Brand: korean'
})

const onSaleBtn = document.querySelector("#filter-sale")
const onSaleBlock = document.querySelector("#filters-onSale-main")
onSaleBtn.addEventListener('click', function () {
    disappear.style.display = "none"
    colors.style.display = "none"
    costBlock.style.display = 'none'
    treesChoice.style.display = 'none';
    koreanBrandBlock.style.display = 'none'
    onSaleBlock.style.display = "flex"
    onSaleBlock.innerHTML = "OnSale"
})

const giftsBtn = document.querySelector("#filter-gifts")
const giftsText = document.querySelector("#filters-gifts-main")
giftsBtn.addEventListener('click', function () {
    disappear.style.display = "none"
    colors.style.display = "none"
    treesChoice.style.display = 'none';
    koreanBrandBlock.style.display = 'none'
    costBlock.style.display = 'none'
    giftsText.style.display = "flex"
    giftsText.innerHTML = "Gifts"
})

const costBtn = document.querySelector("#filter-cost")
const lowCost = document.querySelector("#filter-low")
const highCost = document.querySelector("#filter-high")
const costText = document.querySelector("#filters-cost-main")
const lowCostBtn = document.querySelector("#filter-low")
const costBlock = document.querySelector("#filter-cost-block")

lowCost.addEventListener('click', function () {
    disappear.style.display = "none"
    colors.style.display = "none"
    treesChoice.style.display = 'none';
    koreanBrandBlock.style.display = 'none'
    giftsText.style.display = "flex"
    giftsText.innerHTML = "Cost: low"
})

highCost.addEventListener('click', function () {
    disappear.style.display = "none"
    colors.style.display = "none"
    treesChoice.style.display = 'none';
    koreanBrandBlock.style.display = 'none'
    giftsText.style.display = "flex"
    giftsText.innerHTML = "Cost: high"
})

costBtn.addEventListener('click', function () {
    if (costBlock.style.display === 'none') {
        costBlock.style.display = 'flex'
        koreanBrandBlock.style.display = 'none'
        colors.style.display = "none"
        treesChoice.style.display = 'none';
    } else {
        costBlock.style.display = 'none'
    }
})


