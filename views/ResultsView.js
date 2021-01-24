import React from 'react'
import HeadTemplate from './templates/HeadTemplate';
import Navbar from './templates/Navbar';
import ResultsTables from './components/organizms/ResultsTables';

const Results = ({ userName, title, results, page, isLoadingDisabled, isLoggedIn }) => (
  <HeadTemplate
    title={title}
  >
    <Navbar userName={userName} isLoggedIn={isLoggedIn} />
      <ResultsTables results={results} page={page} isLoadingDisabled={isLoadingDisabled}  />
  </HeadTemplate>
)

export default Results;