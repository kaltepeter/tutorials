import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";

// Create the Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AnchorButton = styled.a`
  display: block;
  width: auto;
  height: 25px;
  background: #00ebff;
  padding: 10px;
  text-align: center;
  border-radius: 5px;
  color: #000000;
  font-weight: bold;
  line-height: 25px;
  text-transform: uppercase;
  &:hover {
    color: #2e2222;
  }
`;

const BookDetails = ({ data }) => {
  const details = data.books;
  return (
    <Container>
      <h1>{details.title}</h1>
      <p>
        <span>By</span> {}{" "}
        <span style={{ fontSize: "20px" }}>
          <b>{details.author.join(", ")}</b>
        </span>
      </p>
      <img src={details.cover} alt={details.title} width="40%" height="auto" />
      Rating: {details.rating}
      <p style={{ fontSize: "20px" }}>
        <span>
          <b>Pages</b>: {details.pages}
        </span>{" "}
        {" | "}
        <span>
          <b>Publisher</b>: {details.publisher}
        </span>{" "}
        {" | "}
        <span>
          <b>ISBN</b>: {details.isbn}
        </span>
      </p>
      <p style={{ fontSize: "25px" }}>{details.description}</p>
      <AnchorButton href={details.website} target="_blank" rel="noreferrer">
        Go to the Website
      </AnchorButton>
    </Container>
  );
};

export const query = graphql`
  query ($title: String!) {
    books(title: { eq: $title }) {
      author
      cover
      description
      id
      isbn
      pages
      published
      publisher
      rating
      subtitle
      title
      topic
      website
    }
  }
`;

export default BookDetails;
