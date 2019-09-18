    if (document.querySelector('.cascaderPopper')) {
      let menus = document.querySelector('.cascaderPopper')
      let menu = menus.querySelectorAll('ul.el-cascader-menu') || []
      for (let i = 0; i < menu.length; i++) {
        var item = menu[i]
        if ((i === 1 || i === 3) && !item.className.match(new RegExp('selectAbled'))) {
          item.className += ' selectAbled'

          let itemLi = item.querySelectorAll('li.el-cascader-menu__item') || []
          for (let i = 0; i < itemLi.length; i++) {
            if (itemLi[i] && itemLi[i].innerText1 !== this.$t('lang.cards.popularizeListCard.noData') && itemLi[i].innerText1 !== this.$t('lang.common.loading')) {
              var newNode = document.createElement('i')
              newNode.className = 'ppp'
              newNode.innerHTML = '66'
              itemLi.appendChild(newNode)
            }
          }
        }
      }
    }
