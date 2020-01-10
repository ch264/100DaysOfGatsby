import React, { Fragment } from "react"
import { Styled } from "theme-ui"

/**
 * Change the content to add your own bio
 */

export default () => (
  <Fragment>
    This is where <Styled.a href="http://example.com/">Christina Hastenrath</Styled.a>
    {` `}
    goes.
    <br />
    This is my updated Bio
  </Fragment>
)
