<section id="comments">
    <div class="title">
		<?php
		$num_comments = get_comments_number();
		
		if ( comments_open() ) {
			if ( $num_comments == 0 ) {
				$comments = __( 'No Comments' );
			} else {
				$comments = $num_comments . 'دیدگاه';
			}
			$write_comments = '<a href="' . get_comments_link() . '">' . $comments . '</a>';
		} else {
			$write_comments = 'امکان درج دیدگاه وجود ندارد.';
		}
		echo $write_comments;
		?>
    </div>
	<?php include_once( 'comment-form.php' ); ?>

    <ol class="commentlist">
		<?php
		$comments = get_comments( [
			'parent'  => '0',
			'post_id' => get_the_ID(),
			'status'  => 'approve',
		] );
		foreach ( $comments as $comment ) :
			?>
            <div class="media" style="margin-top: 10px;">
                <a class="pull-right" href="#<?= get_comments_link( $comment->comment_ID ) ?>">
                    <img src="<?= get_avatar_url( $comment->comment_author_email ) ?>" width="50" height="50" class="media-object">
                </a>
                <div class="media-body">
                    <h4 class="media-heading"><?= $comment->comment_author ?>
                        <small><? comment_date( 'l d F Y H:i', $comment->comment_ID ) ?></small>
                    </h4>
                    <p>
						<?= $comment->comment_content ?>
                    </p>
					<?php
					$commentsChild = get_comments( [
						'parent'  => $comment->comment_ID,
						'post_id' => get_the_ID(),
						'status'  => 'approve',
					] );
					foreach ( $commentsChild as $commentChild ) : ?>
                        <div class="media">
                            <a class="pull-right" href="#<?= get_comments_link( $commentChild->comment_ID ) ?>">
                                <img src="<?= get_avatar_url( $commentChild->comment_author_email ) ?>" width="50" height="50" class="media-object">
                            </a>
                            <div class="media-body">
                                <h4 class="media-heading"><?= $commentChild->comment_author ?>
                                    <small><? comment_date( 'l d F Y H:i', $commentChild->comment_ID ) ?></small>
                                </h4>
                                <p>
									<?= $commentChild->comment_content ?>
                                </p>
                            </div>
                        </div>
					<? endforeach ?>
                </div>
            </div>
		<? endforeach ?>

    </ol>
</section>