import PreviewPost from '../components/PreviewPost'
import { posts } from '../getAllPosts'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    gridContainer: {
        padding: '0 5%',
    },
})

export default function AllPostsPage() {

    const classes = useStyles();

    let arrPosts = []
    posts.forEach(post => {
        arrPosts.push(
            <Grid container item xs={4} direction='row' justify='center' alignItems='center'>
                <PreviewPost key={post.link} post={post} />
            </Grid>
        )
    });

    return (
        <Grid container className={classes.gridContainer} >
            <Grid item xs={12} justify='center'>
                <h2>
                   All posts!
                </h2>
            </Grid>
            <Grid container item spacing={4}>
                { arrPosts }
            </Grid>
        </Grid>
    )
}