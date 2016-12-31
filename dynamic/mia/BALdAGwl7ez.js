if (self.CavalryLogger) { CavalryLogger.start_js(["U4\/+q"]); }

__d('SubscriptionLevels',[],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={ALL:'162318810514679',DEFAULT:'271670892858696',TOP:'266156873403755'};f.exports=h;}),null);
__d('EditSubscriptions',['csx','cx','Arbiter','AsyncRequest','CSS','DOM','Event','FeedBlacklistButton','MenuDeprecated','Parent','SubscriptionLevels','arrayContains','ge','getOrCreateDOMID'],(function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=45,k=[c('SubscriptionLevels').ALL,c('SubscriptionLevels').DEFAULT,c('SubscriptionLevels').TOP],l={},m={},n={},o={},p={},q={},r={},s={},t={},u={},v={},w="/ajax/follow/follow_profile.php",x="/ajax/follow/unfollow_profile.php",y="/ajax/settings/notifications/notify_me.php",z={},aa={},ba={},ca=null,da={};function ea(cb){return c('arrayContains')(k,cb);}function fa(cb,db,eb,fb){var gb=c('Parent').byClass(fb,'uiMenuItem')||c('Parent').bySelector(fb,"._54ni"),hb=c('getOrCreateDOMID')(cb);if(!gb||!c('DOM').contains(cb,gb)){return;}else if(c('CSS').hasClass(gb,'SubscribeMenuSubscribeCheckbox')){if(n[db]){ka(hb,db);}else ja(hb,db);return false;}else if(c('CSS').hasClass(gb,'SubscribeMenuUnsubscribe')){ka(hb,db);return false;}else if(c('CSS').hasClass(gb,'SubscribeMenuSettingsItem')){wa(cb,true);return false;}else if(c('CSS').hasClass(gb,'SubscriptionMenuGoBack')){wa(cb,false);return false;}else if(c('CSS').hasClass(gb,'SubscriptionMenuItem')){ha(cb,db,eb,gb);return false;}else if(c('CSS').hasClass(gb,'SubscribeMenuNotifyMeCheckbox')){ga(cb,db);return false;}}function ga(cb,db){if(o[db]){ab(cb,db);}else za(cb,db);}function ha(cb,db,eb,fb){if(c('CSS').hasClass(fb,'SubscriptionMenuLevel')){if(c('MenuDeprecated').isItemChecked(fb))return;ua(cb,db,na(fb),true,eb);}else if(c('CSS').hasClass(fb,'SubscriptionMenuCategory')){ra(db,fb,!c('MenuDeprecated').isItemChecked(fb),true,eb);}else if(c('CSS').hasClass(fb,'SubscriptionAppStory'))ta(db,fb,!c('MenuDeprecated').isItemChecked(fb),eb);}function ia(cb){return da[cb]?da[cb]:0;}function ja(cb,db){var eb={profile_id:db};c('Arbiter').inform('FollowingUser',eb);c('Arbiter').inform(c('FeedBlacklistButton').UNBLACKLIST,eb);new (c('AsyncRequest'))().setURI(w).setMethod('POST').setData({profile_id:db,location:ia(cb)}).setErrorHandler(c('Arbiter').inform.bind(null,'FollowUserFail',eb)).send();}function ka(cb,db){var eb={profile_id:db};c('Arbiter').inform('UnfollowingUser',eb);c('Arbiter').inform(c('FeedBlacklistButton').BLACKLIST,eb);new (c('AsyncRequest'))().setURI(x).setMethod('POST').setData({profile_id:db,location:ia(cb)}).setErrorHandler(c('Arbiter').inform.bind(null,'UnfollowUserFail',eb)).send();}function la(cb,db,eb){var fb={profile_id:cb,level:s[cb],custom_categories:t[cb],location:eb};new (c('AsyncRequest'))().setURI('/ajax/follow/manage_subscriptions.php').setData(fb).send();}function ma(cb,db){var eb=t[db]||[],fb=c('MenuDeprecated').getItems(cb);fb.forEach(function(gb){if(c('CSS').hasClass(gb,'SubscriptionMenuCategory')){var hb=na(gb);if(c('arrayContains')(eb,hb)){pa(gb);}else qa(gb);}else if(c('CSS').hasClass(gb,'SubscriptionAppStory')){var ib=na(gb);if(ba[db]&&ba[db][ib]){pa(gb);}else qa(gb);}});ua(cb,db,s[db],false);}function na(cb){var db=c('DOM').scry(cb,'input')[0];return db&&db.value;}function oa(cb){return c('DOM').find(cb,'a.itemAnchor');}function pa(cb){c('CSS').addClass(cb,'checked');oa(cb).setAttribute('aria-checked',true);}function qa(cb){c('CSS').removeClass(cb,'checked');oa(cb).setAttribute('aria-checked',false);}function ra(cb,db,eb,fb,gb){if(eb){pa(db);}else qa(db);var hb=na(db);if(ea(hb)){eb&&sa(cb,hb);}else if(eb){if(!c('arrayContains')(t[cb],hb))t[cb].push(hb);}else{var ib=t[cb].indexOf(hb);if(ib!==-1)t[cb].splice(ib,1);}if(fb)la(cb,hb,gb);}function sa(cb,db){s[cb]=db;c('Arbiter').inform('SubscriptionLevelUpdated',{profile_id:cb,level:db});}function ta(cb,db,eb,fb){var gb='/ajax/feed/filter_action/',hb=na(db),ib={actor_id:cb,app_id:hb};if(eb){pa(db);gb+='resubscribe_user_app/';ib.action='resubscribe_user_app';if(!ba[cb])ba[cb]={};ba[cb][hb]=true;}else{qa(db);gb+='unsubscribe_user_app_checkbox/';ib.action='unsubscribe_user_app_checkbox';if(ba[cb])ba[cb][hb]=false;}new (c('AsyncRequest'))().setURI(gb).setData(ib).send();}function ua(cb,db,eb,fb,gb){var hb=c('DOM').scry(cb,'.SubscriptionMenuLevel'),ib=null;hb.forEach(function(jb){if(na(jb)==eb){ib=jb;}else if(c('MenuDeprecated').isItemChecked(jb))ra(db,jb,false,false);});ib&&ra(db,ib,true,fb,gb);}function va(cb,db,eb){n[db]=eb;c('CSS').conditionClass(cb,'isUnsubscribed',!eb);var fb=c('DOM').scry(cb,'li.SubscribeMenuSubscribeCheckbox');if(fb.length!==0){var gb=fb[0];if(eb){pa(gb);}else qa(gb);}}function wa(cb,db){c('CSS').conditionClass(cb,'subscriptionMenuOpen',db);}function xa(cb,db,eb){var fb=c('DOM').find(cb,".FriendListSubscriptionsMenu"),gb=c('DOM').find(fb,".uiMenuInner");if(ca!=null)ca.forEach(function(hb){gb.removeChild(hb);});eb.forEach(function(hb){gb.appendChild(hb);});ca=eb;}c('Arbiter').subscribe('UnfollowUser',function(cb,db){if(u[db.profile_id]){sa(db.profile_id,u[db.profile_id]);t[db.profile_id]=v[db.profile_id].slice();}});c('Arbiter').subscribe('UpdateSubscriptionLevel',function(cb,db){var eb=db.profile_id+'',fb=db.level+'';sa(eb,fb);var gb;for(gb in l)if(l[gb]===eb){var hb=c('ge')(gb);hb&&ua(hb,eb,fb,false);}});c('Arbiter').subscribe('listeditor/close_editor',function(){var cb;for(cb in l){var db=c('ge')(cb);db&&wa(db,false);}});function ya(cb,db,eb){o[db]=eb;var fb=aa[db];if(fb){if(eb){fb.select();}else fb.deselect();return;}var gb=c('DOM').scry(cb,'li.SubscribeMenuNotifyMeCheckbox');if(gb.length!==0){var hb=gb[0];c('CSS').conditionShow(hb,true);var ib=c('DOM').scry(cb,'li.SubscribeMenuNotifyMeCheckboxSeparator');if(ib.length>0)c('CSS').conditionShow(ib[0],true);if(eb){pa(hb);}else qa(hb);}}function za(cb,db){var eb={profile_id:db};c('Arbiter').inform('EnableNotifsForUser',eb);new (c('AsyncRequest'))().setURI(y).setMethod('POST').setData({notifier_id:db,enable:true}).setErrorHandler(c('Arbiter').inform.bind(null,'EnableNotifsForUserFail',eb)).send();}function ab(cb,db){var eb={profile_id:db};c('Arbiter').inform('DisableNotifsForUser',eb);new (c('AsyncRequest'))().setURI(y).setMethod('POST').setData({notifier_id:db,enable:false}).setErrorHandler(c('Arbiter').inform.bind(null,'DisableNotifsForUserFail',eb)).send();}var bb={init:function cb(db,eb,fb){var gb=c('getOrCreateDOMID')(db);da[gb]=fb;if(!l[gb])c('Event').listen(db,'click',function(hb){return fa(db,l[gb],fb,hb.getTarget());});if(fb===j&&z[eb].length)xa(db,eb,z[eb]);if(s[eb])ma(db,eb);l[gb]=eb;c('CSS').conditionClass(db,'NonFriendSubscriptionMenu',!m[eb]);c('CSS').conditionClass(db,'cannotSubscribe',!p[eb]);c('CSS').conditionClass(db,'noSubscriptionLevels',q[eb]&&!r[eb]);c('CSS').conditionClass(db,'noSubscribeCheckbox',!m[eb]&&!q[eb]);va(db,eb,n[eb]);ya(db,eb,o[eb]);c('Arbiter').subscribe(['FollowUser','FollowingUser','UnfollowUserFail'],function(hb,ib){if(ib.profile_id==eb)va(db,eb,true);}.bind(this));c('Arbiter').subscribe(['UnfollowUser','UnfollowingUser','FollowUserFail'],function(hb,ib){if(ib.profile_id==eb){c('Arbiter').inform('SubMenu/Reset');va(db,eb,false);}}.bind(this));c('Arbiter').subscribe(['EnableNotifsForUser','DisableNotifsForUserFail'],function(hb,ib){if(ib.profile_id==eb)ya(db,eb,true);}.bind(this));c('Arbiter').subscribe(['DisableNotifsForUser','EnableNotifsForUserFail'],function(hb,ib){if(ib.profile_id==eb)ya(db,eb,false);}.bind(this));c('Arbiter').subscribe('listeditor/friend_lists_changed',function(hb,ib){if(ib.notify_state){var jb=ib.added_uid?ib.added_uid:ib.removed_uid;ya(db,jb,ib.notify_state.is_notified);}}.bind(this));},getSubscriptions:function cb(db){return {level:s[db],custom_categories:t[db]};},registerTimelineNotifySelector:function cb(db,eb){var fb=db.getInitialMenu(),gb=db.getContentRoot();fb.forEachItem(function(hb){var ib=hb.getRoot();if(c('CSS').hasClass(ib,'SubscribeMenuNotifyMeCheckbox')){aa[eb]=hb;ya(gb,eb,o[eb]);}});fb.subscribe('itemclick',function(hb,ib){if(ib.item===aa[eb])ga(gb,eb);return true;});},toggleNotificationsOnJoin:function cb(db,eb){if(o[db]!==eb)ga(null,db);},setSubscriptions:function cb(db,eb,fb,gb,hb,ib,jb,kb,lb,mb,nb,ob){sa(db,jb+'');m[db]=eb;n[db]=fb;p[db]=gb;q[db]=hb;r[db]=ib;u[db]=lb+'';t[db]=kb.map(String);v[db]=mb.map(String);z[db]=ob;o[db]=nb;}};f.exports=b.EditSubscriptions||bb;}),null);
__d("VideoData",[],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){"use strict";this.$VideoData1=i;}h.prototype.hasHD=function(){"use strict";return !!this.$VideoData1.hd_src;};h.prototype.getEncodingTag=function(){"use strict";return this.$VideoData1.encoding_tag;};h.prototype.getVideoID=function(){"use strict";return this.$VideoData1.video_id;};h.prototype.getAspectRatio=function(){"use strict";return this.$VideoData1.aspect_ratio;};h.prototype.getRotation=function(){"use strict";return this.$VideoData1.rotation;};h.prototype.hasSubtitles=function(){"use strict";return !!this.$VideoData1.subtitles_src;};h.prototype.hasDashManifest=function(){"use strict";return !!this.$VideoData1.dash_manifest;};h.prototype.getDashManifest=function(){"use strict";return this.$VideoData1.dash_manifest;};h.prototype.getDashPrefetchedRepresentationIDs=function(){"use strict";return this.$VideoData1.dash_prefetched_representation_ids;};h.prototype.getSubtitlesSrc=function(){"use strict";return this.$VideoData1.subtitles_src;};h.prototype.getPlayableSrcSD=function(){"use strict";if(this.$VideoData1.sd_src_no_ratelimit)return this.$VideoData1.sd_src_no_ratelimit;return this.$VideoData1.sd_src;};h.prototype.getPlayableSrcHD=function(){"use strict";if(this.$VideoData1.hd_src_no_ratelimit)return this.$VideoData1.hd_src_no_ratelimit;return this.$VideoData1.hd_src;};h.prototype.getPlayableSrcRateLimitedSD=function(){"use strict";return this.$VideoData1.sd_src;};h.prototype.getPlayableSrcRateLimitedHD=function(){"use strict";return this.$VideoData1.hd_src;};h.prototype.getLiveManifestUrl=function(){"use strict";return this.isLiveStream()&&this.$VideoData1.sd_src;};h.prototype.hasRateLimit=function(){"use strict";return !!this.$VideoData1.sd_src_no_ratelimit;};h.prototype.getStreamType=function(){"use strict";return this.$VideoData1.stream_type;};h.prototype.isLiveStream=function(){"use strict";return this.$VideoData1.is_live_stream;};h.prototype.liveRoutingToken=function(){"use strict";return this.$VideoData1.live_routing_token;};h.prototype.getHDTag=function(){"use strict";return this.$VideoData1.hd_tag;};h.prototype.getSDTag=function(){"use strict";return this.$VideoData1.sd_tag;};h.prototype.getProjection=function(){"use strict";return this.$VideoData1.projection;};h.prototype.getPlayerVersionOverwrite=function(){"use strict";return this.$VideoData1.player_version_overwrite;};h.prototype.getFalloverData=function(){"use strict";var i=this.$VideoData1.fallover_data;return i?i.map(function(j){return new h(j);}):[];};h.prototype.getRawData=function(){"use strict";return this.$VideoData1;};f.exports=h;}),null);
__d("XVideoPermalinkController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/{vanity}\/videos\/{?set_token}\/{video_id}\/",{photo_id:{type:"Int"},set_token:{type:"String"},type:{type:"Enum",defaultValue:3,enumType:0},link_share:{type:"String"},subject:{type:"Int"},object_id:{type:"Int"},opaque_cursor:{type:"String"},legacy_user_id:{type:"Int"},legacy_photo_id:{type:"Int"},video_id:{type:"Int"},comment_id:{type:"Int"},notif_t:{type:"Bool",defaultValue:false},is_notification_preview:{type:"Bool",defaultValue:false},vanity:{type:"String"},reply_comment_id:{type:"Int"}});}),null);