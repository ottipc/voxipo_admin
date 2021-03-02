import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import {Check, Clear} from "@material-ui/icons";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {styles} from "../style/style"
import classNames from "classnames";




const useStyles = makeStyles(styles);

export function GridItem(props) {
    const classes = useStyles();
    const { children, ...rest } = props;
    return (
        <Grid item {...rest} className={classes.grid}>
            {children}
        </Grid>
    );
}

export  function GridContainer(props) {
    const classes = useStyles();
    const { children, ...rest } = props;
    return (
        <Grid container {...rest} className={classes.grid}>
            {children}
        </Grid>
    );
}

export  function CustomInput(props) {
    const classes = useStyles();
    const {
        formControlProps,
        labelText,
        id,
        labelProps,
        inputProps,
        error,
        success,
        source
    } = props;

    const labelClasses = classNames({
        [" " + classes.labelRootError]: error,
        [" " + classes.labelRootSuccess]: success && !error
    });
    const underlineClasses = classNames({
        [classes.underlineError]: error,
        [classes.underlineSuccess]: success && !error,
        [classes.underline]: true
    });
    const marginTop = classNames({
        [classes.marginTop]: labelText === undefined
    });
    return (
        <FormControl
            {...formControlProps}
            className={formControlProps.className + " " + classes.formControl}
        >
            {labelText !== undefined ? (
                <InputLabel
                    className={classes.labelRoot + labelClasses}
                    htmlFor={id}
                    {...labelProps}

                >
                    {labelText}
                </InputLabel>
            ) : null}
            <Input
                classes={{
                    root: marginTop,
                    disabled: classes.disabled,
                    underline: underlineClasses
                }}
                id={id}
                {...inputProps}
            />
            {error ? (
                <Clear className={classes.feedback + " " + classes.labelRootError} />
            ) : success ? (
                <Check className={classes.feedback + " " + classes.labelRootSuccess} />
            ) : null}
        </FormControl>
    );
}




export function Card(props) {
    const classes = useStyles();
    const { className, children, plain, profile, chart, ...rest } = props;
    const cardClasses = classNames({
        [classes.card]: true,
        [classes.cardPlain]: plain,
        [classes.cardProfile]: profile,
        [classes.cardChart]: chart,
        [className]: className !== undefined
    });
    return (
        <div className={cardClasses} {...rest}>
            {children}
        </div>
    );
}


export  function CardHeader(props) {
    const classes = useStyles();
    const { className, children, color, plain, stats, icon, ...rest } = props;
    const cardHeaderClasses = classNames({
        [classes.cardHeader]: true,
        [classes[color + "CardHeader"]]: color,
        [classes.cardHeaderPlain]: plain,
        [classes.cardHeaderStats]: stats,
        [classes.cardHeaderIcon]: icon,
        [className]: className !== undefined
    });
    return (
        <div className={cardHeaderClasses} {...rest}>
            {children}
        </div>
    );
}


export  function CardBody(props) {
    const classes = useStyles();
    const { className, children, plain, profile, ...rest } = props;
    const cardBodyClasses = classNames({
        [classes.cardBody]: true,
        [classes.cardBodyPlain]: plain,
        [classes.cardBodyProfile]: profile,
        [className]: className !== undefined
    });
    return (
        <div className={cardBodyClasses} {...rest}>
            {children}
        </div>
    );
}


export  function CardFooter(props) {
    const classes = useStyles();
    const { className, children, plain, profile, stats, chart, ...rest } = props;
    const cardFooterClasses = classNames({
        [classes.cardFooter]: true,
        [classes.cardFooterPlain]: plain,
        [classes.cardFooterProfile]: profile,
        [classes.cardFooterStats]: stats,
        [classes.cardFooterChart]: chart,
        [className]: className !== undefined
    });
    return (
        <div className={cardFooterClasses} {...rest}>
            {children}
        </div>
    );
}
