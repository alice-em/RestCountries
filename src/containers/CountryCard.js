import PropType from 'prop-types';
import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  list: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 300,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

const CountryCard = ({
  capital,
  flag,
  languages,
  name,
  population,
  subregion,
}) => {
  const classes = useStyles();
  return (
    <Card>
      <CardHeader subheader={`subregion: ${subregion}`} title={name} />
      <CardMedia
        className={classes.media}
        image={flag}
        title={`${name} flag`}
      />
      <CardContent>
        <Typography component="p" variant="body1">
          Fun Facts
        </Typography>
        <List className={classes.list}>
          <ListItem>
            <ListItemText primary={`Capital: ${capital}`} />
          </ListItem>
          <ListItem>
            <ListItemText primary={`Population: ${population}`} />
          </ListItem>
          <ListItem>
            <ListItemText primary={`Number of languages spoken: ${languages.length}`} />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};

CountryCard.propTypes = {
  capital: PropType.string.isRequired,
  flag: PropType.string.isRequired,
  languages: PropType.arrayOf(PropType.shape({
    name: PropType.string,
  })),
  name: PropType.string.isRequired,
  population: PropType.number.isRequired,
  subregion: PropType.string.isRequired,
};

CountryCard.defaultProps = {
  languages: [],
};

export default CountryCard;
