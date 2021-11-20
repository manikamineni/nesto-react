import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { createApplication } from '../../services/mortgage.api';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const MortgageCard = ({ product }: any): React.ReactElement => {
  const classes = useStyles();
  console.log(product, '**');

  const handleCreateApplication = (id: number) => {
    createApplication(id);
  };

  return (
    <section className='c-mortgage-card'>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.pos}>Type: {product.type}</Typography>
          <Typography className={classes.pos}>Name: {product.name}</Typography>
          <Typography className={classes.title} gutterBottom>
            Best rate: {product.bestRate}
          </Typography>

          <Typography variant='body2' component='p'>
            Lender: {product.lenderName}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size='small'
            onClick={() => handleCreateApplication(product.id)}
          >
            Select this Product
          </Button>
        </CardActions>
      </Card>
    </section>
  );
};

export default MortgageCard;
