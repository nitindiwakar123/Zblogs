import authService from "./appwrite/authService/auth";
import databaseService from "./appwrite/databaseService/database";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Header, Footer, Loading, Container} from "./components";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { login, logout } from "./features/auth/authSlice";
import { setPosts, deletePosts } from "./features/post/postSlice";

function App() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    setLoading(true);

    const authPromise = authService.getCurrentUser()
        .then((userData) => {
            if (userData) {
                dispatch(login({ userData: userData }));
            } else {
                dispatch(logout());
            }
        })
        .catch((error) => console.error("AuthService error:", error));

    const postsPromise = databaseService.getPosts([])
              .then((posts) => {
                  if (posts) {
                      dispatch(setPosts({ posts: posts.documents }));

                    } else {
                      dispatch(deletePosts());
                  }
              })
              .catch((error) => console.error("DatabaseService error:", error));

    Promise.all([authPromise, postsPromise]).finally(() => {
        setLoading(false);
    });
}, [dispatch]);



  if (!loading) {
    return (
      <div className="w-full overflow-x-hidden">
        <div className="w-full">
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      </div> 
    )
  } else {
    return (
      <Container height="h-full">
        <Loading />
      </Container>
    )
  }
}

export default App;
