import { useState } from 'react';
import { PageHero } from '../components/PageHero';
import { NewsletterForm } from '../components/NewsletterForm';
import { blogCategories, blogPosts } from '../data/content';
import styles from './Blog.module.css';

export function Blog() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const visiblePosts = activeCategory
    ? blogPosts.filter((p) => p.category === activeCategory)
    : blogPosts;

  return (
    <div>
      <PageHero
        background="var(--color-blue)"
        title="Our Blog"
        subtitle="Notes on math education, the soroban method, and what's new at Math Ninja."
        cta={
          <a href="#newsletter" className="btn btn-primary">
            Subscribe
          </a>
        }
      />

      <div className={`container ${styles.categories}`}>
        {blogCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`${styles.categoryChip} ${activeCategory === cat ? styles.active : ''}`}
            onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className={`container ${styles.posts}`}>
        {visiblePosts.length === 0 ? (
          <p className={styles.empty}>No posts in this category yet.</p>
        ) : (
          visiblePosts.map((post) => (
            <article key={post.title} className={styles.post}>
              <h2 className={styles.postTitle}>{post.title}</h2>
              <p className={styles.postMeta}>
                by | {post.date} | {post.category}
              </p>
              <p className={styles.postExcerpt}>{post.excerpt}</p>
            </article>
          ))
        )}
      </div>

      <div id="newsletter" className="container">
        <div className={styles.newsletter}>
          <h2 className={styles.newsletterHeading}>Join Our Newsletter</h2>
          <NewsletterForm />
        </div>
      </div>
    </div>
  );
}
