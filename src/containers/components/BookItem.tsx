import React from 'react';
import styled from 'styled-components';
import Card from "@material-ui/core/Card";
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
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

const BookItem: React.FC<IBooks> = ({ id, title, author, cover, history }) => {
  
  const classes = useStyles();

  return (
  <Wrapper>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={cover}
          title={title}
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
          {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {author}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="default" onClick={() => history.push(`/book/${id}`)}>
          More information
        </Button>
      </CardActions>
    </Card> 
  </Wrapper>
  )
  };

export default BookItem;
