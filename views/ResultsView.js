import React from 'react'
import HeadTemplate from './templates/HeadTemplate';
import Navbar from './templates/Navbar';
import ResultsTables from './components/organizms/ResultsTables';
import Spacer from './components/atoms/Spacer';


const Results = ({ userName, title, results, page, isLoadingDisabled, isLoggedIn, avatar }) => (
  <HeadTemplate
    title={title}
  >
    <Spacer />
    <Navbar userName={userName} isLoggedIn={isLoggedIn} avatar={avatar}/>
      <ResultsTables userName={userName} results={results} page={page} isLoadingDisabled={isLoadingDisabled}  />
  </HeadTemplate>
)

export default Results;