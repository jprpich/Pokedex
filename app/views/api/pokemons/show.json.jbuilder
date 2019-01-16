json.pokemons do 
  json.partial! "api/pokemons/pokemon", pokemon: @pokemon

  # json.attack @pokemon.attack
  # json.defense @pokemon.defense

  json.extract! @pokemon, :attack, :defense, :moves, :poke_type, :item_ids  
end

json.items do
  @pokemon.items.each do |item|
    json.set! item.id do
      json.extract! item, :id, :name, :pokemon_id, :price, :happiness, :image_url
    end
  end
end