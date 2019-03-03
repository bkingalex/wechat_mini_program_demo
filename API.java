package com.sitcat.druidtest.controller;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * By SpringBoot
 *
**/
@RestController
public class helloController {
    @RequestMapping("/")
    public String hello() {
        Map<String, String> map = new HashMap<>();
        map.put("id", "001");
        map.put("title", "数据库");
        map.put("img", "https://baidu.com/image/1.jpg");
        map.put("desc", "mysql数据库");


        Map<String, String> map2 = new HashMap<>();
        map2.put("id", "002");
        map2.put("title", "Java");
        map2.put("img", "https://baidu.com/image/2.jpg");
        map2.put("desc", "java天下第一");

        Map<String, String> map3 = new HashMap<>();
        map3.put("id", "003");
        map3.put("title", "小程序");
        map3.put("img", "https://baidu.com/image/3.jpg");
        map3.put("desc", "微信小程序");

        Map<String, String> map4 = new HashMap<>();
        map4.put("id", "004");
        map4.put("title", "PHP开发");
        map4.put("img", "https://baidu.com/img1.png");
        map4.put("desc", "PHP是世界上最好的语言");

        List<Object> resultList = new ArrayList<>();
        resultList.add(map);
        resultList.add(map2);
        resultList.add(map3);
        resultList.add(map4);
        return JSONArray.toJSONString(resultList);
    }
}
