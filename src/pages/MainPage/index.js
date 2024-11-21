import React from "react";
import Banner from "../../components/Banner";
import Row from "../../components/Row";
import requests from "../../api/requests";

function MainPage(props) {
  return (
    <div>
      <Banner baseURL={props.baseURL} />
      <Row
        title="TV TOP 10 시리즈"
        id="TV"
        fetchUrl={requests.fetchNetfilxOriginals}
        isLargeRow
        baseURL={props.baseURL}
      />
      <Row
        title="지금 뜨는 콘텐츠"
        id="TN"
        fetchUrl={requests.fetchTrending}
        baseURL={props.baseURL}
      />
      <Row
        title="공개 예정 콘텐츠"
        id="TR"
        fetchUrl={requests.fetchUpcoming}
        baseURL={props.baseURL}
      />
      <Row
        title="액션 영화"
        id="AM"
        fetchUrl={requests.fetchActionMovies}
        baseURL={props.baseURL}
      />
      <Row
        title="코미디 영화"
        id="CM"
        fetchUrl={requests.fetchComedyMovies}
        baseURL={props.baseURL}
      />
      <Row
        title="무서운 영화"
        id="HM"
        fetchUrl={requests.fetchHorrorMovies}
        baseURL={props.baseURL}
      />
      <Row
        title="로맨스 영화"
        id="RM"
        fetchUrl={requests.fetchRomanceMovies}
        baseURL={props.baseURL}
      />
      <Row
        title="다큐멘터리"
        id="DM"
        fetchUrl={requests.fetchDocumentariesMovies}
      />
    </div>
  );
}

export default React.memo(MainPage);
