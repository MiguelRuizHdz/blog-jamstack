import { MDXRemote } from 'next-mdx-remote';
import { getFileBySlug, getFiles } from '../lib/mdx';
import MDXComponents from '../components/MDXComponents';

import styles from '../styles/Post.module.css'
export default function Post({ source, frontmatter }) {
    return (
        <div className={ styles.container }>
            <MDXRemote {...source} components={MDXComponents} />
        </div>
    );   
}

export async function getStaticProps({ params }) {
    const { source, frontmatter } = await getFileBySlug( params.slug );

    return {
        props: { source, frontmatter },
    };
}

// Devuelve todas las rutas para todos los posts
export async function getStaticPaths({ params }) {
    const posts = await getFiles();
    const paths = posts.map( (post) => ({
        params: {
            slug: post.replace(/\.mdx/, ''),
        },
    }));

    return {
        paths,
        // Devuelve un error 404
        fallback: false,
    };
}