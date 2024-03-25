import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store/store";
import Home from "./components/main/Home";
import Header from "./components/main/Header";
import Footer from "./components/main/Footer";
import {BookList} from "./components/book/BookList";
import {CdlpList} from "./components/cdlp/CdlpList";
import {ClassicList} from "./components/cdlp/ClassicList";
import {NovelList} from "./components/book/NovelList";
import {ItList} from "./components/book/ItList";
import {NewList} from "./components/book/NewList";
import {BookDetail} from "./components/book/BookDetail";
import {CdlpDetail} from "./components/cdlp/CdlpDetail";
import {BookFind} from "./components/book/BookFind";
import {BoardList} from "./components/board/BoardList";
import BoardInsert from "./components/board/BoardInsert";
import BoardDetail from "./components/board/BoardDetail";
import BoardUpdate from "./components/board/BoardUpdate";
import BoardDelete from "./components/board/BoardDelete";
import {BookCartList} from "./components/book/BookCartList";

function App() {
  return (
      <Provider store={store}>
          <Router>
              <Header/>
              <Routes>
                  <Route exact path={"/"} element={<Home/>}/>
                  <Route path={"/book/list"} element={<BookList/>}/>
                  <Route path={"/novel/list"} element={<NovelList/>}/>
                  <Route path={"/it/list"} element={<ItList/>}/>
                  <Route path={"/new/list"} element={<NewList/>}/>
                  <Route path={"/book/detail/:no"} element={<BookDetail/>}/>
                  <Route path={"/book/find"} element={<BookFind/>}/>
                  <Route path={"/cdlp/list"} element={<CdlpList/>}/>
                  <Route path={"/classic/list"} element={<ClassicList/>}/>
                  <Route path={"/cdlp/detail/:no"} element={<CdlpDetail/>}/>
                  <Route path={"/board/list"} element={<BoardList/>}/>
                  <Route path={"/board/insert"} element={<BoardInsert/>}/>
                  <Route path={"/board/detail/:no"} element={<BoardDetail/>}/>
                  <Route path={"/board/update/:no"} element={<BoardUpdate/>}/>
                  <Route path={"/board/delete/:no"} element={<BoardDelete/>}/>
                  <Route path={"/cart/list"} element={<BookCartList/>}/>
              </Routes>
              <Footer/>
          </Router>

      </Provider>
  );
}

export default App;
