import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";
import { useQuery } from "react-query";

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();

  const { isLoading, data } = useQuery("ordersData", () =>
    fetch("http://localhost:3003/orders").then((res) => res.json())
  );

  const total = data?.orders.reduce(
    (accumulator, order) => accumulator + order.amount,
    0
  );

  const formattedTotal = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(total);

  return (
    <React.Fragment>
      <Title>Total Orders</Title>
      <Typography component="p" variant="h4">
        {isLoading ? "..." : formattedTotal}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}
