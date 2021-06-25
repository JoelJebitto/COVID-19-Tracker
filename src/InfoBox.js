import React from 'react';
import {Card, CardContent, Typography} from "@material-ui/core";

function InfoBox({title, cases, total}) {
    return (
        <Card className="infoBox">
            <CardContent styles="padding-right:100px;">
                <Typography className="ingoBox__title" color="textSecondary">
                    {title}
                </Typography>
                <h2 className="infoBox__cases">
                    {cases}
                </h2>
                <Typography className="ingoBox__total" color="textSecondary">
                    {total} Total
                </Typography>
            </CardContent>
        </Card>
    );
}

export default InfoBox;