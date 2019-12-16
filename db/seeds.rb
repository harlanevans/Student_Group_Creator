# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

@course = [true, false]
@tech = [1, 2, 3, 4, 5,]
@soft = [1, 2, 3, 4, 5,]
@effort = [1, 2, 3, 4, 5,]


Student.create(
  first_name: 'Mike',
  last_name: 'Coker',
  full_time: @course.sample,
  technical: @t = @tech.sample,
  soft: @s = @soft.sample,
  effort: @e = @effort.sample,
  average: (@t + @s + @e) / 3
)
Student.create(
  first_name: 'Harlan',
  last_name: 'Evans',
  full_time: @course.sample,
  technical: @t = @tech.sample,
  soft: @s = @soft.sample,
  effort: @e = @effort.sample,
  average: (@t + @s + @e) / 3
)
Student.create(
  first_name: 'Spencer',
  last_name: 'Richards',
  full_time: @course.sample,
  technical: @t = @tech.sample,
  soft: @s = @soft.sample,
  effort: @e = @effort.sample,
  average: (@t + @s + @e) / 3
)
Student.create(
  first_name: 'Derek',
  last_name: 'Dapp',
  full_time: @course.sample,
  technical: @t = @tech.sample,
  soft: @s = @soft.sample,
  effort: @e = @effort.sample,
  average: (@t + @s + @e) / 3
)
Student.create(
  first_name: 'Alex',
  last_name: 'Winitzky',
  full_time: @course.sample,
  technical: @t = @tech.sample,
  soft: @s = @soft.sample,
  effort: @e = @effort.sample,
  average: (@t + @s + @e) / 3
)
Student.create(
  first_name: 'Henry',
  last_name: 'Doan',
  full_time: @course.sample,
  technical: @t = @tech.sample,
  soft: @s = @soft.sample,
  effort: @e = @effort.sample,
  average: (@t + @s + @e) / 3
)
Student.create(
  first_name: 'Nhi',
  last_name: 'Doan',
  full_time: @course.sample,
  technical: @t = @tech.sample,
  soft: @s = @soft.sample,
  effort: @e = @effort.sample,
  average: (@t + @s + @e) / 3
)
Student.create(
  first_name: 'Marc',
  last_name: 'Price',
  full_time: @course.sample,
  technical: @t = @tech.sample,
  soft: @s = @soft.sample,
  effort: @e = @effort.sample,
  average: (@t + @s + @e) / 3
)
Student.create(
  first_name: 'Will',
  last_name: 'Liang',
  full_time: @course.sample,
  technical: @t = @tech.sample,
  soft: @s = @soft.sample,
  effort: @e = @effort.sample,
  average: (@t + @s + @e) / 3
)
Student.create(
  first_name: 'Nick',
  last_name: 'Ristagno',
  full_time: @course.sample,
  technical: @t = @tech.sample,
  soft: @s = @soft.sample,
  effort: @e = @effort.sample,
  average: (@t + @s + @e) / 3
)

puts 'Seeded Students'