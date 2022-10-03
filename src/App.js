import React, { useEffect, useState } from "react";
import "./index.css";

import { Box, CircularProgress } from "@mui/material";
import Navbar from "./Navbar";
import Table from "./Table";
import { Provider } from "react-redux";
import RootStore from "./persistence/stores/RootStore";
import UserDetails from "./UserDetails";
import { commonApi } from "./persistence/api/CommonApi";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isUserDetailsLoading, setIsUserDetailsLoading] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState();
  const [userDetails, setUserDetails] = useState(null);
  const selectedId = todoList?.[selectedIndex]?.id;
  const selectedUserId = todoList?.[selectedIndex]?.userId;
  const selectedTitle = todoList?.[selectedIndex]?.title;

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const result = await commonApi.get("todos");
        setTodoList(result.data.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchuserdetails = async () => {
      if (selectedId) {
        setIsUserDetailsLoading(true);
        try {
          const result = await commonApi.get(`users/${selectedId}`);
          setUserDetails(result.data.data);
          setIsUserDetailsLoading(false);
        } catch (error) {
          console.log(error.message);
          setIsUserDetailsLoading(false);
        }
      }
    };
    fetchuserdetails();
  }, [selectedId]);

  return (
    <Provider store={RootStore}>
      <Box style={{}}>
        <Box style={{ float: "left", width: "50%" }}>
          <Navbar />
          {todoList?.length == 0 && (
            <>
              <CircularProgress style={{ alignSelf: "center" }} />
            </>
          )}
          {todoList?.length !== 0 && (
            <>
              <Table
                todoList={todoList}
                // setSelectedId={setSelectedId}
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
              />
            </>
          )}
        </Box>
        <Box style={{ float: "right", width: "50%" }}>
          {userDetails !== null && (
            <>
              {isUserDetailsLoading == true ? (
                <>
                  <CircularProgress style={{ alignSelf: "center" }} />
                </>
              ) : (
                <>
                  <UserDetails
                    userDetails={userDetails}
                    selectedTitle={selectedTitle}
                    selectedUserId={selectedUserId}
                  />
                </>
              )}
            </>
          )}
        </Box>
      </Box>
    </Provider>
  );
};

export default App;
