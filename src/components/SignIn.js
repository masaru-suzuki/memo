import React, {useState, useEffect} from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{"Copyright © "}
			<Link
        color="inherit"
        target="_blank"
        href="https://twitter.com/masapo62106181"
        rel="noopener"
        >
				memo practice
			</Link>{" "}
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function SignIn(props) {
	const classes = useStyles();
  const [disabled, toggleDisabled] = useState(true);
  const [string, setString] = useState('');

  //ニックネーム入力欄に文字が記入されていたら、buttonコンポーネントのdisabledをfalseにする
  useEffect(() => {
    //stringに値が入っていなかったら、disabledはtrue
    const disabled = string === "";
    //setStateでButtonコンポーネントに渡すdisabledをsettingする
    toggleDisabled(disabled);
    console.log(disabled, string)

  },[string])

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Typography component="h1" variant="h5">
					ようこそ
				</Typography>
				<form className={classes.form} noValidate>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="name"
						label="ニックネーム"
						name="name"
						autoFocus
            onChange={(e) => setString(e.target.value)}
            onKeyDown={(e) => {
              if(e.key === 'Enter'){
                props.setName(e.target.value);
                e.preventDefault()//リクエストをキャンセル
              }
              //変換の時にEnterKeyを押すと、App.jsから渡ってきた、setNameをしてしまう。=>日本語変換を確定した段階でニックネームを確定してしまう
            }}
					/>
					<Button
						type="button"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
            disabled={disabled}
            onClick={() => props.setName(string)}
					>
						はじめる
					</Button>
				</form>
			</div>
			<Box mt={8}>
				<Copyright />
			</Box>
		</Container>
	);
}
