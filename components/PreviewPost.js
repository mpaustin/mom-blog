import Link from 'next/link'
import HeadPost from './HeadPost'
import { Card, CardMedia, CardContent, CardActions, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    card: {
        justifyContent: 'center',
        width: '100%',
    },
})

export const PreviewPost = ({ post }) => {
    const {
        link,
        module: {meta},
    } = post

    const classes = useStyles();

    return (
        <Card className={classes.card} >
            <CardMedia
                component="img"
                alt={meta.imgAlt}
                height="200"
                image={meta.imgUri}
                title={meta.imgTitle}
            />
            <CardContent>
                <Typography gutterBottom variant="h4" component="h2">
                    {meta.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {meta.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Link href={'/posts' + link}>
                    <a>Read more →</a>
                </Link>
            </CardActions>
        </Card>
    )
}

export default PreviewPost
