=begin
You have a grid of size n X n where n is any positive integer.
An ant begins in the center of the grid (or as close as possible to the center),
and moves about the grid one square at a time.
All squares are white initially but will change to black as the ant moves around.
If the ant is on a white square, he rotates 90 degrees clockwise, moves one square
over, and the previous square becomes black.

If the ant is on a black square, he rotates 90 degrees counter-clockwise and moves
one square over.
Write a function that takes in a grid size, and the number of steps the ant must
take, and prints the state of the board after the steps have been taken
=end

def print_board(size, steps)
  #this will always be center for odd size, and one center square for even size
  coord = size/2
  #set initial location with empty string for color
  location = [coord, coord, 'white']
  #create the board starting with all white squares
  board = []
  #set initial direction
  direction = 'north'

  row = 0
  col = 0

  size.times do
    size.times do
      board << [row, col, 'white']
      col += 1
    end
    col = 0
    row += 1
  end

  steps.times do
    if location[2] == 'white' && direction == 'north'
      board.map do |b|
        if b == location
          b[2] = 'black'
        end
      end
      location[1] += 1
      direction = 'east'
    end

    if location[2] == 'white' && direction == 'east'
      board.map do |b|
        if b == location
          b[2] = 'black'
        end
      end
      location[0] += 1
      direction = 'south'
    end

    if location[2] == 'white' && direction == 'south'
      board.map do |b|
        if b == location
          b[2] = 'black'
        end
      end
      location[1] -= 1
      direction = 'west'
    end

    if location[2] == 'white' && direction == 'west'
      board.map do |b|
        if b == location
          b[2] = 'black'
        end
      end
      location[0] -= 1
      direction = 'north'
    end

    if location[2] == 'black' && direction == 'north'
      board.map do |b|
        if b == location
          b[2] = 'black'
        end
      end
      location[1] -= 1
      direction = 'west'
    end

    if location[2] == 'black' && direction == 'west'
      board.map do |b|
        if b == location
          b[2] = 'black'
        end
      end
      location[0] += 1
      direction = 'south'
    end

    if location[2] == 'black' && direction == 'south'
      board.map do |b|
        if b == location
          b[2] = 'black'
        end
      end
      location[1] += 1
      direction = 'east'
    end

    if location[2] == 'black' && direction == 'east'
      board.map do |b|
        if b == location
          b[2] = 'black'
        end
      end
      location[0] -= 1
      direction = 'north'
    end
  end

  print board

end

print_board(5, 5)
