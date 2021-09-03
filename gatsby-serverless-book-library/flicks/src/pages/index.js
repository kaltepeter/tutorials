import * as React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql, Link } from "gatsby";
import _ from "lodash";

// 2. Create Styled Components
const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Book = styled.div`
  border: 1px solid #4e4e4e;
  border-radius: 4px;
  padding: 0.5rem;
  width: 250px;
  min-height: 450px;
  margin: 1rem;
`;

const ResponsiveImage = styled.img`
  width: 100%;
  height: auto;
`;

const Title = styled.span`
  font-size: 20px;
  font-weight: 500;
`;

// markup
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allBooks {
        nodes {
          title
          id
          author
          cover
          rating
          subtitle
          topic
        }
      }
    }
  `);

  const books = data.allBooks.nodes;

  books.sort((a, b) => b.rating - a.rating);

  return (
    <Main>
      <Container>
        {books.map((book, index) => (
          <Link to={`/${_.kebabCase(book.title)}`}>
            <Book key={index}>
              {book.topic}
              <div>
                {book.cover && (
                  <ResponsiveImage src={book.cover} alt={`${book.title}`} />
                )}
              </div>
              <Title>{book.title}</Title> by{" "}
              <span>{book.author.join(", ")}</span>
              <p>{book.subtitle}</p>
              <p>{book.rating}</p>
            </Book>
          </Link>
        ))}
      </Container>
    </Main>
  );
};

export default IndexPage;
