var tipuesearch = {"pages":[{"title":"About","text":"cmsimde 內容管理系統 倉儲: https://github.com/mdecycu/cmsimde_site 網站: https://mde.tw/cmsimde_site/ 簡報: https://mde.tw/cmsimde_site/reveal 網誌: https://mde.tw/cmsimde_site/blog","tags":"misc","url":"./pages/about/"},{"title":"41123202 bg5 w18","text":"2024 Spring 每周心得 w18網誌心得","tags":"41123202 bg5 w18","url":"./41123202 bg5 w18.html"},{"title":"41123202 bg5 w17","text":"2024 Spring 每周心得 w17網誌心得 此週老師分配了三個任務給我們，第一個任務機器人的零件py、prt、mp4第二個任務為車體車輪組合也是py、prt、mp4 但是第三個任務沒有研究出來一樣問了gpt","tags":"41123202 bg5 w17","url":"./41123202 bg5 w17.html"},{"title":"41123202 bg5 w16","text":"2024 Spring 每周心得 w16網誌心得 填了表單但因為時間緊迫所以不小心填了太爛。這週我們做了機器人的零件部分，並將大家的東西急在一起","tags":"41123202 bg5 w16","url":"./41123202 bg5 w16.html"},{"title":"41123202 bg5 w15","text":"2024 Spring 每周心得 w15網誌心得 這周我們組別一起組裝了平衡鋼球再組的時候有些錯誤的拘束，後來慢慢地調整連桿之間的作動，最後我們也匯出成STL，再導入CoppeliaSim也放入插銷結果在試轉時發現尺吋畫錯了只好重新來過。 將模型從 NX 轉入 CoppeliaSim導出為STL並使用縮放和移動工具來調整模型的尺寸和比例編輯 CoppeliaSim中的模型調整尺寸及比例後進行模擬和測試確認鋼球的正常運作。","tags":"41123202 bg5 w15","url":"./41123202 bg5 w15.html"},{"title":"41123202 bg5 w14","text":"2024 Spring 每周心得 w14網誌心得 在第14周中我們利用nx1872繪圖，由於上次已有一些經驗所以這次相對比較順利，可不免還是有遇到些難題但在組員討論與嘗試下一一化解，在摸索中一起得到的成品是很棒的！","tags":"41123202 bg5 w14","url":"./41123202 bg5 w14.html"},{"title":"41123202 bg5 w13","text":"2024 Spring 每周心得 w13網誌心得 協同有不同的組員來維護一個網站，所以要很清楚的分明出甚麼跟甚麼，像是作者Author，或是其他的所以我們的重點是要清楚讓觀看者可以辨識或是快速尋找要的東西這樣才是快的流產線","tags":"41123202 bg5 w13","url":"./41123202 bg5 w13.html"},{"title":"41123202 bg5 w12","text":"2024 Spring 每周心得 w12網誌心得 做這個零件時出現很多問題，一開始對功能不熟悉做出成品後卻在沒辦法錄製成功，反反覆覆五六次才成功還會有權限的問題，最後的最後用簡潔的步驟才得以成功. 零件圖檔 與3號共同完成 python圖檔 過程影片","tags":"41123202 bg5 w12","url":"./41123202 bg5 w12.html"},{"title":"41123202 bg5 w11","text":"2024 Spring 每周心得 W11網誌心得 用NX的各種功能來創建平衡台的各個部件並用NX的3D建模工具來創建具有精確尺寸和形狀的部件，並使用裝配工具來將它們組合在一起。NX有許多分析工具，可以幫助我們驗證設計的正確性和性能以確保它能夠承受預期的負載以確保各個部件之間的協調和兼容性.","tags":"41123202 bg5 w11","url":"./41123202 bg5 w11.html"},{"title":"41123202 bg5 w10","text":"2024 Spring 每周心得 W10網誌心得 ChatGPT 是一個強大的語言知識庫可能遇到的問題，並提供解決方案，而Gemini 1.5 Pro來設計並繪製零組件最後使用 Claude3將設計好的模型轉換為CoppeliaSim的格式將模型載入 CoppeliaSim，我們就可以開始設計 PID 控制器。透過調整PID控制器的參數，我們可以觀察鋼球在x和y座標上的運動路徑。PD和PID之間PID控制器更能在跟踪斜坡和正弦參考信號時具有更好的性能。","tags":"41123202 bg5 w10","url":"./41123202 bg5 w10.html"},{"title":"41123202 bg5 w9","text":"2024 Spring 每周心得 W9網誌心得 from browser import window, ajax def fetch_csv_data(): url = \"https://mdecd2024.github.io/2bstud-2bsite/downloads/2b.txt\" def on_complete ( req ): if req . status == 200 or req . status == 0 : content = req . text lines = content . split ( '\\n' ) for line in lines : if line . strip () == \"\" : continue items = line . split ( ',' ) if len ( items ) >= 3 : github_username_1 = items [ 1 ]. strip () # 第三個逗號後到第四個逗號前的數據 team = items [ 2 ]. strip () # 第四個逗號後的數據 team2 = items [ 2 ]. strip () github_url_1 = f \"個人倉儲:https://github.com/{github_username_1}/cd2024\" team = f \"分組倉儲:https://github.com/mdecd2024/2b-midbg{team}\" team2 = f \"分組網頁:https://mdecd2024.github.io/2b-midbg{team2}\" csv_data = items [ 1 ]. strip () # 取得 CSV 中第三個逗號後的資料 github_io_url = f \"個人網頁:https://{csv_data}.github.io/cd2024/\" # 新的 GitHub IO URL line_with_urls = f \"{line.strip()},{github_url_1},{github_io_url},{team},{team2}\" # 以逗號分隔的資料串 print ( line_with_urls ) else : print ( \"Error:\" , req . text ) req = ajax . ajax () req . bind ( ' complete ' , on_complete ) req . open ( ' GET ' , url , True ) req . set_header ( ' content - type ' , ' application / x - www - form - urlencoded ' ) req . send () fetch_csv_data() 此為2Bmidbg5大家從GPT得出答案，並以2b.txt得出所有人的倉儲以及網址，上述team1.tema2為了得出不同的東西而有所改變","tags":"41123202 bg5 w9","url":"./41123202 bg5 w9.html"},{"title":"41123202 bg5 w6","text":"2024 Spring 每周心得 W6網誌心得 協同NX零組件繪圖和CoppeliaSim場景模擬是我們團隊在產品設計和模擬方面的重要工作，透過這些程式可以輕鬆地設計和模擬各種機器人和自動化系統，並進行相關的測試和優化。此外這周需製作教學影片分組整理並自評Replit檢視靜態網站執行動態網站伺服器 自評影片","tags":"41123202 bg5 w6","url":"./41123202 bg5 w6.html"},{"title":"41123202 bg5 w5","text":"2024 Spring 每周心得 W5網誌心得 先整理先前的影片資料是一個重要的步驟，它有助於我們回顧以前的學習和訓練內容。這不僅可以幫助我們加深對知識的理解，還可以發現可能需要進一步學習或加強的領域。 分組網誌統整起來是一個很好的做法，特別是在協同工作的情況下。這有助於將所有組員的貢獻整合到一個地方，使得資訊更容易查閱和分享。 *使用NX軟體進行零組件繪圖是一個具有挑戰性但也非常有趣的任務。這需要一定的技術和經驗，但通過進行繪圖，我們可以將設計想法轉化為實際的產品或零件。透過繪圖過程，我們可以學習如何運用工程設計原則和工具來解決問題，並將設計概念轉化為具體的成果。 影片上字幕HW 將老師上課教學影片上字幕 影片3 字幕稿 影片4 字幕稿","tags":"41123202 bg5 w5","url":"./41123202 bg5 w5.html"},{"title":"41123202 bg5 w4","text":"2024 Spring 每周心得 W4網誌心得 第四週中各分組需要確立各組員分工，實現同時進行多個任務和功能開發，而不會互相干擾。每個分支都可以專注於一個特定的任務或功能，從而更好地管理和追蹤進度。另一方面，如果需要檢視動態網站，則可以Replit執行 python3 main.py。當然不只有Replit用github codespace也是可以的先建自己的分支，再來合併完全沒有問題。 更新倉儲 透過看老師的教學影片學到如果要更新倉儲有以下指令 1 ./gen_blog 2 git add . 3 git commit -m \"內容\" 4 git push 例外如果遇到錯誤可以看看git pull來看哪裡出了差錯","tags":"41123202 bg5 w4","url":"./41123202 bg5 w4.html"},{"title":"41123202 bg5 w3","text":"2024 Spring 每周心得 W3網誌心得 在第三週我們主要探討了如何善用 GitHub Codespaces與Gitpod 進行協同開發，並將組員的倉儲設為分組倉儲的子模組。同時，我們還導入了LaTeX轉 PDF的機制，有助於製作期中分組報告 Github Codespaces 與 Gitpod 兩個工具提供了基於雲端的開發環境，能夠幫助團隊輕鬆共享開發環境，並實現即時協同編輯。這對於跨地區、跨時區的團隊合作特別有用，讓成員可以隨時隨地進行開發和編輯工作。子模組使得所有相關的專案都能夠保持同步，並且能夠方便地進行版本控制和管理。這樣的設定使得團隊成員能夠更加簡單地共享代碼、資源和文件並導入LaTeX轉PDF製作期中分組報告。 如何將自己的倉儲加到bg5 打上 git submodules add 自己github網址.git 41123202 Latex翻譯 自己是擔任多頁的翻譯，視做一個流水線的動作，翻譯完給其他人完全達到協同的需要，自己則是用chatgpt來做翻譯","tags":"41123202 bg5 w3","url":"./41123202 bg5 w3.html"},{"title":"41123202 bg5 w2","text":"2024 Spring 每周心得 W2網誌心得 利用Github Classroom進行協同分組，並在Github Codespaces維護個人或分組網站內容，且近端執行動態網站，利用近端可攜系統維護分組網站，同時Github Codespase提供了開發環境即可編輯和測試代碼的方便方法，統無需依賴特定的工作站或設備任何地方都能夠方便地繼續你的開發作業，在做這門課時可以問問同組的意見再透過協同使用codespace來更新群組的blog，更厲害的是不只可以更新自己，也可以從群組將自己blog推上去，方便老師觀看每周心得","tags":"41123202 bg5 w2","url":"./41123202 bg5 w2.html"},{"title":"41123202 bg5 w1","text":"2024 Spring 每周心得 內容管理系統 使用者可以自行利用 cmsimde_site 倉儲作為 Template, 建立自己的網站內容管理系統. 引用網站網址連結的方法: cmsimde_site - 在文章中多次引用同一個網站連結時, 可以使用此種方法. https://github.com/mdecycu/cmsimde_site - 假如想要快速將網址套用 html 網站連結, 可以使用此種方法. cmsimde_site - 也可以使用 Markdown 的標準網站連結使用格式. # 引用 Python 程式的方法 for i in range(10): print(i, \"列出字串\") 也可以直接在 .md 檔案中使用 html 標註, 或加入 Javascript 或 Brython 程式碼. 從 1 累加到 100: 1 add to 100 將 iterable 與 iterator 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. Filename: .py Run Output 清除輸出區 清除繪圖區 Reload 從 1 累加到 100 part2: 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block Filename: .py Run Output 清除輸出區 清除繪圖區 Reload","tags":"41123202 bg5 w1","url":"./41123202 bg5 w1.html"}]};