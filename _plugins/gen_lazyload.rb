module Jekyll
  class LazyLoadImages < Generator
    priority :low

    def generate(site)
      site.posts.docs.each do |post|
        content = post.content.dup
        content.gsub!(/!\[(.*?)\]\((.*?)\)/, '\0{:loading="lazy"}')
        post.content = content
      end
    end
  end
end