module Jekyll
    class LazyLoadImages < Generator
      safe true
      priority :low
  
      def generate(site)
        site.posts.docs.each do |post|
          #post_output = post.content.gsub(/(?<!`)!\[(.*?)\]\((?!.*loading=)(.*?)\)(?!{.*`)/m, "![\\1](\\2){:loading='lazy'}")
          #post.content = post_output
        end
      end
    end
  end