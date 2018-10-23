class CreateGroups < ActiveRecord::Migration[5.1]
  def change
    create_table :groups do |t|
      t.string :student1
      t.string :student2
      t.string :ip

      t.timestamps
    end
  end
end
