import React from 'react';
import styled from 'styled-components';
import Card from "@material-ui/core/Card";
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { IBooks } from '../../types';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    cursor: "default",
  },
  media: {
    height: 140,
    width: 345,
    cursor: "default",
  },
  content: {
    cursor: "default",
  }
});

const Wrapper = styled.div`
  font-size: 14px;
  flex:2;
  padding: 14px;
  display: flex;
  align-items: center;
`;

const CardDetails: React.FC<IBooks> = ({ id, title, author, cover, isbn }) => {
  
  const classes = useStyles();

  return (
  <Wrapper>
    <Card >
      <CardActionArea>
        <img src={cover} />
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            by {author}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Isbn: {isbn}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
      </CardActions>
    </Card> 
  </Wrapper>
  )
  };

export default CardDetails;
