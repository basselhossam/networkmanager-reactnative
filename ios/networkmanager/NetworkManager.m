//
//  NetworkManager.m
//  networkmanager
//
//  Created by Apple on 5/12/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "NetworkManager.h"
#import <IBGxNetworkManager/IBGxNetworkManager.h>
#import <React/RCTConvert.h>
#import <React/RCTLog.h>
#import <os/log.h>

@implementation NetworkManager

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(runInBackGround: (BOOL *) enable){
  RCTLog(@"run in background");
  IBGxNetworkManager.sharedInstance.shouldContinueRunningRequestsInBackground = enable;
}

RCT_EXPORT_METHOD(get: (NSString *) url params:(NSDictionary *) params callback:(RCTResponseSenderBlock) callback){
  NSURL *mURL = [RCTConvert NSURL:url];
  [IBGxNetworkManager.sharedInstance GET:mURL parameters:params completionHandler:^(id  _Nullable response, NSError * _Nullable error) {
    callback(@[response, error]);
  }];
  
}

@end
