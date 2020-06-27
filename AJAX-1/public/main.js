getCSS.onclick = ()=>{
    const request = new XMLHttpRequest()  // 创建的时候readyState = 0
    request.open('get', './style.css')  // readyState = 1
    request.onreadystatechange = ()=>{
        if(request.readyState === 4) {
            if(request.status>=200 && request.status<300) {
                const style = document.createElement('style')
                style.innerHTML = request.response
                document.head.appendChild(style)
            }else {
                alert('加载 CSS 失败')
            }
        }
    }
    request.send() // readyState = 2
    // 页面接受第一个信息 readyState = 3
    // 下载完成 readyState = 4
}

getJS.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('get', './2.js')
    request.onreadystatechange = ()=>{
        if(request.readyState === 4 && request.status >= 200 && request.status<300) {
            const script = document.createElement('script')
            script.innerHTML = request.response
            document.body.appendChild(script)
        }
    }
    request.send()
}
getHTML.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('get', './3.html')
    request.onreadystatechange = ()=>{
        if(request.readyState === 4 && request.status >= 200 && request.status<300) {
            const div = document.createElement('div')
            div.innerHTML = request.response
            document.body.appendChild(div)
        }
    }
    request.send()
}
getXML.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('get', './4.xml')
    request.onreadystatechange = ()=>{
        if(request.readyState === 4 && request.status >= 200 && request.status<300) {
            const dom = request.responseXML
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim())
        }
    }
    request.send()
}
getJSON.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('get', './5.json')
    request.onreadystatechange = ()=>{
        if(request.readyState === 4 && request.status >= 200 && request.status<300) {
            console.log(request.response)
            const obj = JSON.parse(request.response)
            console.log(obj)
            myName.textContent = obj.name
        }
    }
    request.send()
}
let n = 1
getPage.onclick = ()=>{
    if(n<3){
        const request = new XMLHttpRequest()
        request.open('get', `./page${n+1}`)
        request.onreadystatechange = ()=>{
            if(request.readyState === 4 && request.status >= 200 && request.status < 300) {
                const arr = JSON.parse(request.response)
                arr.forEach(item => {
                    const li = document.createElement('li')
                    li.textContent = item.id
                    xxx.appendChild(li)
                });
                n+=1
            }
        }
        request.send() 
    }else {
        console.log('没有下一页啦！')
        if(n=3) {
            getPage.disabled = true
        }
    }
}


// const fnAjax = (url, callback)=>{
//     const request = new XMLHttpRequest()
//     request.open('get', url)
//     request.onreadystatechange = ()=>{
//         if(request.readyState === 4 && request.status >= 200 && request.status<300) {
//             const res = request.response
//             callback(res)
//         }
//     }
//     request.send()    
// }

// getJS.onclick = ()=>{fnAjax('./2.js', (res)=>{
//     const script = document.createElement('script')
//     script.innerHTML = res
//     document.body.appendChild(script)
// })}