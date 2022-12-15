var tipuesearch = {"pages": [{'title': 'About', 'text': 'cmsite: wcms use  https://github.com/mdecycu/cmsimde  as submodule \n', 'tags': '', 'url': 'About.html'}, {'title': '作業心得', 'text': '我自己在做作業的時候,都會去看老師上課錄的教學影片,但有時候明明都照著影片做,卻還是做不出來,我自己也不擅長做程式類的東西,上課時我都聽不懂甚至也不知道老師在做哪個步驟,但幸好老師有在從教一次,讓我大概知道要做什麼,雖然大部分的情況都需要找同學幫忙,但至少我現在懂得如何維護網站了 \n (ps:老師不要當我,我盡力了) \n', 'tags': '', 'url': '作業心得.html'}, {'title': 'HW', 'text': '\n', 'tags': '', 'url': 'HW.html'}, {'title': 'W5', 'text': '亂數 \n \n \n \n # 導入亂數模組 \n \n \n \n import   random \n \n \n \n # 導入字串模組 \n \n \n \n import   string \n \n \n \n # 利用 def 關鍵字定義函式 \n \n \n \n # 函式的輸入變數可以設定初始值 \n \n \n \n def   password_generator ( size = 4 ,  chars = string . ascii_lowercase   +   string . digits ): \n \n \n \n # 函式內以多行註解說明函式功能 \n \n \n \n """Generate random password \n \n \n \n  """ \n \n \n \n # 利用 return 關鍵字將所產生的亂數字串傳回 \n \n \n \n return   \'\' . join ( random . choice ( chars )  for   _   in   range ( size )) \n \n \n \n # 建立一個變數與隨後的字串對應 \n \n \n \n pass_string   =   "abcdefghkmnpqrstuwxyz123456789" \n \n \n \n cp_num   =  [ "0747" ,  "0761" ] \n \n \n \n cad_num   =  [ "0773" ,  "0786" ] \n \n \n \n def   gen_acc_pass ( course ,  course_num ): \n \n \n \n stud_list   = [] \n \n \n \n for   num   in   course_num : \n \n \n \n url   =   "https://nfu.cycu.org/?semester=1111&courseno="   +   num   +   "&column=True" \n \n \n \n class_list   =   open ( url ). read (). split ( " \\n " )[: - 1 ] \n \n \n \n stud_list   +=   class_list \n \n \n \n #print(stud_list) \n \n \n \n for   stud_num   in   stud_list : \n \n \n \n password   =   password_generator ( 4 ,  pass_string ) \n \n \n \n #print(password) \n \n \n \n account   =   course   +   stud_num \n \n \n \n #print(account) \n \n \n \n print ( stud_num   +   " \\t "   +   account   +   " \\t "   +   password ) \n \n \n \n gen_acc_pass ( "cp" ,  cp_num ) \n \n \n \n gen_acc_pass ( "cad" ,  cad_num ) \n \n \n \n git \n', 'tags': '', 'url': 'W5.html'}, {'title': 'W6', 'text': '抽點 \n \n \n \n from   browser   import   document ,  html \n \n \n \n \n \n \n \n brython_div1   =   document [ "brython_div2" ] \n \n \n \n """ \n \n \n \n brython_div1 <= html.BUTTON("hello") \n \n \n \n brython_div1 <= html.BR() \n \n \n \n brython_div1 <= html.A("google", href="https://google.com") \n \n \n \n """ \n \n \n \n \n \n \n \n url   =   "https://mde.tw/studlist/2022fall/1b.txt" \n \n \n \n data   =   open ( url ). read (). split ( " \\n " ) \n \n \n \n mdecp2022   =   "https://mdecp2022.github.io/site-" \n \n \n \n data   =   data [ 1 : - 1 ] \n \n \n \n for   i   in   data : \n \n \n \n stud   =   i . split ( " \\t " ) \n \n \n \n stud_num   =   stud [ 0 ] \n \n \n \n github_acc   =   stud [ 1 ] \n \n \n \n #print(stud_num, github_acc) \n \n \n \n if   github_acc   ==   "" : \n \n \n \n github_acc   =   stud_num \n \n \n \n site   =   mdecp2022   +   github_acc \n \n \n \n link   =   html . A ( stud_num ,  href = site ) \n \n \n \n brython_div1   <=   link \n \n \n \n brython_div1   <=   html . BR () \n \n \n \n \n \n \n # Python 的註解分為單行註解與多行, 單行註解可在字串前方放入 # \n \n \n \n \'\'\'多行註解則可以透過三個單引號前後標註字串或文字段落內容,  \n \n \n \n 也可以使用三個雙引號作為多行註解的標註 \n \n \n \n \'\'\' \n \n \n \n # 使用 import 導入 random 模組, 隨後就可以直接引用 random 模組的方法 \n \n \n \n import   random \n \n \n \n cp1b   =   "0761" \n \n \n \n # 宣告 url 變數值為字串, 此字串為取得 cp2022 1a 選課成員名單 \n \n \n \n url   =   "https://nfu.cycu.org/?semester=1111&courseno="   +   cp1b   +   "&column=True" \n \n \n \n # 利用上述已經宣告的 url 變數字串值, 作為 open() 函式的輸入變數, 可以連結至該網站 \n \n \n \n # 連接 url 所代表字串的網站後, 再利用 read() 函式讀取該網站的內容, 即可取得 cp2022 1a 的選課成員學號 \n \n \n \n # url 所屬的網站, 乃 69 中的一台虛擬主機 8/10ff-0-1-2, 並利用 Get 從教務主機取回課程註冊成員學號 \n \n \n \n # 由於所取回的學號以跳行符號隔開, 因此取回的學號資料行, 再利用 split() 函式, 以 \\n 跳行符號分割後 \n \n \n \n # 所對應到 data 的資料型別將會是數列 \n \n \n \n data   =   open ( url ). read (). split ( " \\n " ) \n \n \n \n # 經過檢查 data 數列, 發現最後一個 element 為空字串, 因此利用 [:-1] 去掉數列的最後一個元素, -1 代表數列最後一個元素的索引 \n \n \n \n #print(data[:-1]) \n \n \n \n # 設定一個變數, 與修課成員學號數列對應 \n \n \n \n stud   =   data [: - 1 ] \n \n \n \n # 使用 random 模組中的 shuffle() 函式, 以隨機的方式排列 stud 數列內容 \n \n \n \n random . shuffle ( stud ) \n \n \n \n # 設定 num 與 5 對應, 或將 5 整數值存入 num 變數所對應的記憶體位址 \n \n \n \n num   =   5 \n \n \n \n # 利用 for 重複迴圈與 range() 變數, 列印出 (利用 print() 函式) 已經隨機排列次序的 stud 數列的最前面 num 個學號值 \n \n \n \n for   i   in   range ( num ): \n \n \n \n print ( stud [ i ]) \n \n \n \n git \n', 'tags': '', 'url': 'W6.html'}, {'title': 'w10', 'text': '繪圖 \n \n \n \n # 這個程式用於 demo 以 canvas 畫線以及寫字 \n \n \n \n # 從 Brython 程式庫中的 browser 模組導入 document 類別, 並以簡寫設定為 doc \n \n \n \n from browser import document as doc \n \n \n \n # 從 browser 模組導入 html 類別, 主要用於建立 CANVAS 標註物件, 並插入頁面中 \n \n \n \n from browser import html \n \n \n \n # 利用 html 建立一個 CANVAS 標註物件, 與變數 canvas 對應 \n \n \n \n canvas = html.CANVAS(width = 600, height = 600) \n \n \n \n # 將 canvas 標註的 id 設為 "canvas" \n \n \n \n canvas.id = "canvas" \n \n \n \n # 將 document 中 id 為 "brython_div1" 的標註 \n \n \n \n # 設為與 brython_div 變數對應 \n \n \n \n brython_div = doc["brython_div1"] \n \n \n \n # 將 canvas 標註放入 brython_div 所在位置 \n \n \n \n # 頁面中原本就已經放入 <div id="brython_div"></div> 標註 \n \n \n \n brython_div <= canvas \n \n \n \n # 將頁面中 id 為 canvas 的 CANVAS 設為與 canvas 變數對應 \n \n \n \n canvas = doc["canvas"] \n \n \n \n # 將 canvas 的 2d 繪圖 context 命名為 ctx \n \n \n \n ctx = canvas.getContext("2d") \n \n \n \n # 建立一個 dRect() 函式 \n \n \n \n # s default 為 1, c defaul 為紅色 \n \n \n \n def dRect(lux, luy, w, h, s=1, c=\'#ff0000\'): \n \n \n \n ctx.lineWidth = s \n \n \n \n ctx.strokeStyle = c \n \n \n \n ctx.beginPath(); \n \n \n \n ctx.rect(lux, luy, w, h) \n \n \n \n ctx.stroke(); \n \n \n \n \n \n \n \n # 建立畫直線函式 \n \n \n \n def draw_line(x1, y1, x2, y2, color="#ff0000"): \n \n \n \n ctx.beginPath() \n \n \n \n ctx.moveTo(x1, y1) \n \n \n \n ctx.lineTo(x2, y2) \n \n \n \n ctx.strokeStyle = color \n \n \n \n ctx.stroke() \n \n \n \n # 建立 write Text 函式 \n \n \n \n def wText(x, y, t, s=14, c=\'#0000ff\'): \n \n \n \n ctx.font = str(s) + "px Arial"; \n \n \n \n ctx.fillText(t, x, y) \n \n \n \n # 定義畫格線的函式 \n \n \n \n def grid(startx, starty, w, h, wnum, hnum, pixel=1, color="#ff0000"): \n \n \n \n # 利用迴圈與座標增量繪圖 \n \n \n \n # 因為輸入 wnum 與 hnum 為格子數, 畫格線數則需加上 1 \n \n \n \n for i in range(wnum+1): \n \n \n \n for j in range(hnum+1): \n \n \n \n # 畫上下直線 \n \n \n \n yend = starty + h*(hnum) \n \n \n \n xend = startx + w*(wnum) \n \n \n \n x = startx + i*w \n \n \n \n draw_line(x, starty, x, yend, color) \n \n \n \n # 畫左右直線 \n \n \n \n y = starty + j*h \n \n \n \n draw_line(startx, y, xend, y, color) \n \n \n \n #wText(w/2-10, y-w/2, str(j)) \n \n \n \n \n \n \n \n # 設定格數 \n \n \n \n num = 15 \n \n \n \n # 設定線寬 \n \n \n \n pixel = 1 \n \n \n \n # 設定 w 寬度 \n \n \n \n w = int(canvas.width/num) - pixel \n \n \n \n # 設定 h 高度 \n \n \n \n h = int(canvas.height/num) - pixel \n \n \n \n # 設定繪圖座標點起點位置 \n \n \n \n x = 1 \n \n \n \n y = 1 \n \n \n \n # 利用 grid 函式畫出格線 \n \n \n \n grid(x, y, w, h, num, num, pixel=1, color="black") \n \n \n \n git', 'tags': '', 'url': 'w10.html'}, {'title': 'w13', 'text': '溫度轉換1 \n \'\'\' f = c*9/5 + 32 c = (f-32)*5/9 \'\'\' c = input("請輸入攝氏溫度值") c = float(c) #print(c, type(c)) f = c*9/5 + 32 print(c, f) \n 溫度轉換2 \n \'\'\' f-c*9/5+32 c=(f-32)*5/9 \'\'\' c = input("請輸入攝氏溫度值") print(type(c)) c= float(c) print("你輸入的攝氏溫度:" + str(c),"等於華氏溫度:" + str(c*9/5 +32)) \n', 'tags': '', 'url': 'w13.html'}, {'title': 'w14', 'text': '缺考名單 \n \n \n \n import ast \n \n \n \n # get stud_list first \n \n \n \n def get_stud(c_name): \n \n \n \n courses = {"1a": "0747", "1b": "0761", "2a": "0773", "2b": "0786"} \n \n \n \n #c_name = "1b" \n \n \n \n c = courses[c_name] \n \n \n \n url = "https://nfu.cycu.org/?semester=1111&courseno=" + c + "&column=True" \n \n \n \n data = open(url).read().split("\\n") \n \n \n \n stud = data[:-1] \n \n \n \n return stud \n \n \n \n \n \n \n \n cp_stud = get_stud("1b") \n \n \n \n # get w10 quiz result \n \n \n \n cp_w11_quiz_url = "https://gist.githubusercontent.com/mdecycu/9df4b372ac1b7386cf259ced15f1a2b2/raw/a0be253dc36fb3d0d2e1878950dae0b13d07a8f6/2022_1208_cp_w14_1b_quiz.json" \n \n \n \n cp_w10_quiz_url = "https://gist.githubusercontent.com/mdecycu/9df4b372ac1b7386cf259ced15f1a2b2/raw/a6825f13b1bb0b61e09e74dd117729eefe1d947f/20221110_cp1b_w10_quiz.json" \n \n \n \n def get_score(url): \n \n \n \n num_stud = 0 \n \n \n \n total_score = 0 \n \n \n \n json_data = open(url).read() \n \n \n \n big_dict = ast.literal_eval(json_data) \n \n \n \n data = big_dict["body"]["testuser"] \n \n \n \n quiz_dict = {} \n \n \n \n for i in data: \n \n \n \n stud_id = data[i]["user_name"] \n \n \n \n stud_score = int(float(data[i]["total_score"])) \n \n \n \n quiz_dict[stud_id] = stud_score \n \n \n \n num_stud = num_stud + 1 \n \n \n \n total_score = total_score + stud_score \n \n \n \n return quiz_dict, num_stud, total_score \n \n \n \n \n \n \n \n #cp_quiz, num_stud, total_score = get_score(cp_w10_quiz_url) \n \n \n \n cp_quiz, num_stud, total_score = get_score(cp_w11_quiz_url) \n \n \n \n cp_abs = [] \n \n \n \n for stud in cp_stud: \n \n \n \n try: \n \n \n \n print(stud, cp_quiz[stud]) \n \n \n \n except: \n \n \n \n # 缺考者沒有 quiz 成績 \n \n \n \n print(stud, "缺") \n \n \n \n cp_abs.append(stud) \n \n \n \n print("\\n考試平均分數為:", int(total_score/num_stud)) \n \n \n \n # 列出缺考名單 \n \n \n \n print("="*20) \n \n \n \n print("以下為 w14 缺考名單:") \n \n \n \n for stud in cp_abs: \n \n \n \n print(stud) \n \n \n \n git \n', 'tags': '', 'url': 'w14.html'}, {'title': 'w15', 'text': '1.為何學習計算機程式需要建立個人倉儲? A:學會管理和更新自己的網站 \n 2.全球資訊網能夠提供甚麼功能或有什麼優點? A:能夠快速得到想要的資訊 \n 3.Replit, stud.cycu.org 與 localhost 分別代表甚麼? \n A: Replit:提供線上集成開發環境服務的公司\xa0\xa0 stud.cycu.org: 是一台 Ubuntu 伺服器\xa0\xa0 localhost:在電腦網路中用於表示「此電腦」的主機名 \n 4.https, ssh 到底提供使用者那些功能或優點? \n A:能夠安全的使用網路 \n 5.Brython 與 Python 有甚麼差別? \n \n A: Brython:是一個用 Python 3 撰寫的框架\xa0\xa0 Python:是一種廣泛使用的直譯式、進階和通用的程式語言 \n \n \n 6.能夠直接在瀏覽器中以 Brython 繪製中華民國國旗, 或模擬綠色方塊在方塊格點中任意移動, 代表甚麼? \n \n A:可以畫出想要的圖形 \n \n 7.變數, 字串, 整數, 浮點數, 數列, Tuple, Dictionary, 函式, 重複迴圈, class, 物件導向, 資料庫, 這些名詞對您而言代表甚麼? \n \n A:重要的程式語法 \n', 'tags': '', 'url': 'w15.html'}, {'title': 'cp2022', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation \n Variables \n Comments \n Numbers \n Strings \n print \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n', 'tags': '', 'url': 'cp2022.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation \n Variables \n Comments \n Numbers \n Strings \n print \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束 ', 'tags': '', 'url': 'Brython.html'}]};