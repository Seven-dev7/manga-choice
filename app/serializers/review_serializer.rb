class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :score, :manga_id
end
