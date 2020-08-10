from flask import Blueprint, request, send_file, make_response
import cv2
import glob
import json
Blueprint_ImageGet = Blueprint('Image',__name__,url_prefix='/api/image')

@Blueprint_ImageGet.route('/',methods=["GET"])
def imageResponse():
    params = request.args.to_dict()
    
    if('target' not in params.keys()):
        data = {'message' : 'Invalid Params'}
        return make_response(data,404)
    else:
        files = glob.glob('./'+params['target']+'/*.jpg')
        if(len(files) > 0):
            print('Send it')
            return send_file(files[0],mimetype="image/jpeg")
        else:          
            data = {'message' : 'empty file'}
            return make_response(data,200)
@Blueprint_ImageGet.route('/information',methods=["GET"])
def sendInformation():
    params = request.args.to_dict()
    if('target' not in params.keys()):
        data = {'message' : 'Invalid Params'}
        return make_response(data,404)
    else:
        files= glob.glob('./'+params['target'] + '/*.json')
        if(len(files) != 0):
            print(files[0])
            jsonptr = open(files[0],'r')
            jsonfile = json.load(jsonptr)
            return make_response(jsonfile,200)
        else:
            msg = {'message' : 'file Not Found'}
            return make_response(msg,404)