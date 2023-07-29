import React from 'react';
import StandardCss from '../StandardCss'
import InlineStyle from '../InlineStyles'
import Module from '../Modules'
import StyledComponents from '../StyledComponents'

export default function AllStyles() {

  return (
    <>
      <h1>All Styles</h1>
      <p>All the styling options are available here</p>
      <hr/>
      <StandardCss />
      <InlineStyle />
      <Module />
      <StyledComponents />
    </>
  );
}
