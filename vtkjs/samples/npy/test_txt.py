import numpy as np
import json

data_colors = np.loadtxt('100k_colors.txt')
data_points = np.loadtxt('100k_points.txt')

points_list = []
for point, color in zip(data_points, data_colors):
  r = color[0] / 256 * 255
  g = color[1] / 256 * 255
  b = color[2] / 256 * 255
  point_dict = {'x': point[0], 'y': point[1], 'z': point[2], 'r': r, 'g': g, 'b': b}
  points_list.append(point_dict)

json_data = json.dumps(points_list)

with open('point_cloud_colored.json', 'w') as json_file:
  json_file.write(json_data)