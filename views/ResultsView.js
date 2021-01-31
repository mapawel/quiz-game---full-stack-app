import React from 'react'
import HeadTemplate from './templates/HeadTemplate';
import ResultsTables from './components/organizms/ResultsTables';

const Results = ({ userName, title, results, page, isLoadingDisabled, isLoggedIn, avatar, menuActive }) => (
  <HeadTemplate
    title={title}
    userName={userName}
    isLoggedIn={isLoggedIn}
    avatar={avatar}
    menuActive={menuActive}
  >
    <ResultsTables
      userName={userName}
      results={results}
      page={page}
      isLoadingDisabled={isLoadingDisabled}
    />
  </HeadTemplate>
)

export default Results;