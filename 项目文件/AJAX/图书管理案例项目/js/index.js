/**
 * 目标1：渲染图书列表
 *  1.1 获取数据
 *  1.2 渲染数据
 */



const creator = 'pharos'

function getBooksList() {
    // 1.1 获取数据
    axios({
        url: 'http://hmajax.itheima.net/api/books',
        params: {
            // 外号：获取数据
            creator: creator
        }
    }).then(result => {
        console.log(result);
        const bookList = result.data.data
        console.log(bookList);

        // 1.2 渲染数据
        const htmlStr = bookList.map((items, index) => {
            return `
            <tr>
            <td>${index + 1}</td>
            <td>${items.bookname}</td>
            <td>${items.author}</td>
            <td>${items.publisher}</td>
            <td> 
              <span class="del">删除</span>
              <span class="edit">编辑</span>
            </td>
          </tr>
            `
        }).join('')
  

        console.log(htmlStr);
        document.querySelector('.list').innerHTML = htmlStr
    })

}


// 网页加载执行，截取并渲染列表一次

getBooksList()